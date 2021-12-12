import React from "react";
import {
  RegisterMutation,
  useUpdateEventPayMutation,
} from "../../../generated/graphql";
import dotenv from "dotenv";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

dotenv.config();

interface Probs {
  data: RegisterMutation["register"]["eventPay"];
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

/******** Callback Functions ********/
const PayRegister = ({ data }: Probs) => {
  /******** Mutation Hook ********/
  const [updateEventPayMutation, { data: updateEventPayData, loading, error }] =
    useUpdateEventPayMutation();

  React.useEffect(() => {
    loadRazorpay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadRazorpay = async () => {
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

  if (error)
    return (
      <Modal isOpen={true} onClose={() => window.location.reload()}>
        <ModalOverlay />
        <ModalContent backgroundColor="#f1aaaa" color="black">
          <ModalHeader>Some error occurred.{error?.message}</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    );

  return (
    <Modal isOpen={true} onClose={() => window.location.reload()}>
      <ModalOverlay />
      <ModalContent backgroundColor="#e2e19c" color="black">
        <ModalHeader>Loading...</ModalHeader>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
};

export default PayRegister;
