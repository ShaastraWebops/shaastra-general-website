import React from "react";
import {
  GetEventQuery,
  RegisterMutation,
  useRegisterMutation,
  useRegisterRecordingMutation,
  useUpdateEventPayMutation,
  useUpdateRecordingPayMutation,
} from "../../../generated/graphql";
import dotenv from "dotenv";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

dotenv.config();

interface Probs {
  workshopIds: string[];
  offerType: string;
  // dataF: GetEventQuery["getEvent"];
  // isAdmin: Boolean;
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

const PayRecording = ({
  /*dataF, isAdmin,*/ workshopIds,
  offerType,
}: Probs) => {
  const history = useHistory();
  var { isOpen, onOpen, onClose } = useDisclosure();
  const [registerRecording, { data: data1, error, loading }] =
    useRegisterRecordingMutation({
      /******** On create order completion, open Razorpay ********/
      async onCompleted(data) {
        if (data.registerRecording.eventPay) {
          await loadRazorpay(data.registerRecording.eventPay);
        }
      },
    });

  /******** Mutation Hook ********/
  const [
    updateRecordingPayMutation,
    {
      data: updateEventPayData,
      loading: updateEventPayLoading,
      error: updateEventPayError,
    },
  ] = useUpdateRecordingPayMutation();

  const loadRazorpay = async (data: any) => {
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
      name: "Workshop Recording",
      image: "", //TODO: Add the shaastra link here
      order_id: data?.orderId,

      /******** Handler function to update the payment details ********/
      handler: async function (response: any) {
        try {
          await updateRecordingPayMutation({
            variables: {
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
      await registerRecording({
        variables: {
          offerType: offerType,
          workshopsIDs: workshopIds,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (updateEventPayData?.updateRecordingPay) {
    const onClose = () => {
      window.location.reload();
    };
    return (
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#addfd0" color="black">
          <ModalHeader>Registered Successfully</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
  }

  if (updateEventPayError || error) {
    error
      ? (onClose = () => {
          if (error.message === "Please login to continue") {
            history.push("/login");
          }
          window.location.reload();
        })
      : (onClose = () => {
          window.location.reload();
        });
    return (
      <Modal isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#f1aaaa" color="black">
          <ModalHeader>
            Some error occurred {updateEventPayError?.message} {error?.message}
          </ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );
  }

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
    <Button
      mt={10}
      w={"40%"}
      marginBottom={"20px"}
      bg={"#301b1b"}
      color={"white"}
      rounded={"xl"}
      boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
      _hover={{
        bg: "#543535",
      }}
      _focus={{
        bg: "#543535",
      }}
      onClick={registerHandler}
    >
      Pay Now
    </Button>
  );
};

export default PayRecording;
