import logo from "./logo.svg";
import "./App.css";
import React from "react";
import GooglePayButton from "@google-pay/button-react";

function App() {
  return (
    <>
      <div>
        <h1
          className="googleText"
          style={{
            textAlign: "center",
            fontSize: "45px",
            color: "#FFFFFF",
            marginTop: "40vh",
          }}
        >
          <img src={logo} alt="logo" className="App-logo" />
          Google Pay React Demo
        </h1>

        <GooglePayButton
          className="paybtn"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: "10",
              currencyCode: "INR",
              countryCode: "IN",
            },
            shippingAddressRequired: true,
            callbackIntents: ["PAYMENT_AUTHORIZATION"],
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("success", paymentRequest);
          }}
          onPaymentAuthorized={(paymentData) => {
            console.log("Payment Authorized Success", paymentData);
            return { transactionState: "SUCCESS" };
          }}
          existingPaymentMethodRequired="false"
          buttonColor="white"
          buttonType="Buy"
        />
      </div>
    </>
  );
}

export default App;
