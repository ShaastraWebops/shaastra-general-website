import React from "react";
import {
  GetEventQuery,
  RegisterMutation,
  useRegisterMutation,
  useUpdateEventPayMutation,
} from "../../../generated/graphql";
import dotenv from "dotenv";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

dotenv.config();

interface Probs {
  data: GetEventQuery["getEvent"];
  isAdmin: Boolean;
}

function loadScript(src: string) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const PayRegister = ({ data, isAdmin }: Probs) => {
  const [register, { data: data1, error, loading }] = useRegisterMutation({
    /******** On create order completion, open Razorpay ********/
    async onCompleted(data) {
      if (data.register.eventPay) {
        await loadRazorpay(data.register.eventPay);
      }
    },
  });

  /******** Mutation Hook ********/
  const [
    updateEventPayMutation,
    {
      data: updateEventPayData,
      loading: updateEventPayLoading,
      error: updateEventPayError,
    },
  ] = useUpdateEventPayMutation();

  const loadRazorpay = async (
    data: RegisterMutation["register"]["eventPay"]
  ) => {
    /******** Load Razorpay Script ********/
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }

    /******** Razorpay Options ********/
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: data?.amount,
      currency: "INR",
      name: data?.event.name,
      image: "", //TODO: Add the shaastra link here
      order_id: data?.orderId,

      /******** Handler function to update the payment details ********/
      handler: async function (response: any) {
        try {
          await updateEventPayMutation({
            variables: {
              eventId: data?.event.id!,
              data: {
                orderId: response.razorpay_order_id,
                payementId: response.razorpay_payment_id,
                paymentSignature: response.razorpay_signature,
              },
            },
          });
        } catch (e) {
          console.log(e);
        }
      },
      prefill: {
        name: data?.user.name,
        email: data?.user.email,
        contact: data?.user.mobile,
      },
      notes: {
        address: data?.user.address,
      },
      theme: {
        color: "#3399cc",
      },
    };

    /******** Open Razorpay ********/
    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  /******** Register Handler ********/
  const registerHandler = async () => {
    try {
      /******** Create OrderID ********/
      await register({
        variables: {
          EventID: data.id,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (updateEventPayData?.updateEventPay) {
    const onClose = () => {
      window.location.reload();
    };
    return (
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#addfd0" color="black">
          <ModalHeader>Registrated Successfully</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
  }

  if (updateEventPayError || error)
    return (
      <Modal isOpen={true} onClose={() => window.location.reload()}>
        <ModalOverlay />
        <ModalContent backgroundColor="#f1aaaa" color="black">
          <ModalHeader>Some error occurred</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );

  if (loading || updateEventPayLoading)
    return (
      <Modal isOpen={true} onClose={() => window.location.reload()}>
        <ModalOverlay />
        <ModalContent backgroundColor="#addfd0" color="black">
          <ModalHeader>
            Don't refresh or close until you get a successfull message.
            Loading...
          </ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );

  return (
    <div>
      {!isAdmin &&
        (data.registrationType === "NONE" ? (
          <Box marginRight={"2vw"} marginTop="2vh" height="1vw">
            <Alert status="info" size={"xs"}>
              <AlertIcon />
              Registration is not required for this event
            </Alert>
          </Box>
        ) : (
          <Box
            marginRight={"2vw"}
            marginTop="2vh"
            height={[
              "fit-content",
              "fit-content",
              "fit-content",
              "fit-content",
            ]}
          >
            <Button
              backgroundColor={"rgb(171, 228, 156)"}
              color="black"
              padding={["0.5vw", "0.5vw", "0.5vw", "1.25vw"]}
              fontSize={["2vw", "2vw", "2vw", "1vw"]}
              onClick={registerHandler}
              // onClick={
              //   //() => IndividualReg(data.id)
              // }
            >
              REGISTER NOW
            </Button>
          </Box>
        ))}
    </div>
  );
};

export default PayRegister;
