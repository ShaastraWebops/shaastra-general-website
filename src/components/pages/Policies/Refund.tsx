import { Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Refund = (props: Props) => {
  return (
    <VStack p={10} alignItems={"stretch"}>
      <Heading pb={10}>RETURN POLICY</Heading>
      <Text>
        Thank you for your purchase. We hope you are happy with your purchase.
        However, if the purchase is a mistake or/and are not completely
        satisfied with your purchase for any reason, you may cancel your order
        with us for a full refund only. Please see below for more information on
        our return policy.
      </Text>
      <Heading fontSize={24} pt={8} textAlign={"left"}>
        REFUNDS
      </Heading>
      <Text>
        You are entitled to cancel Your Order within 7 days of purchase without
        giving any reason for doing so. Reimbursement will happen no later than
        14 days from the cancellation date.
      </Text>
      <Heading fontSize={24} pt={8} textAlign={"left"}>
        CANCELLATION PROCESS
      </Heading>
      <Text>
        To cancel an order, please send an email to sales@shaastra.org.
      </Text>
      <Text>
        After receiving your request and inspecting the date of purchase of your
        item, we will process your return. Refunds may take 1-2 billing cycles
        to appear on your credit card statement, depending on your credit card
        company.
      </Text>
      <Heading fontSize={24} pt={8} textAlign={"left"}>
        EXCEPTIONS
      </Heading>
      <Text>
        For defective or damaged products, please contact us at the contact
        details below to arrange a refund or exchange.
      </Text>
      <Heading fontSize={24} pt={8} textAlign={"left"}>
        QUESTIONS
      </Heading>
      <Text>
        If you have any questions concerning our return policy, please contact
        us at:
        <br />
        <a href="mailto:sales@shaastra.org">sales@shaastra.org</a>&nbsp; or at
        +91 8897127106 - Sales Manager
      </Text>
    </VStack>
  );
};

export default Refund;
