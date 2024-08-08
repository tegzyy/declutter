import { createStandaloneToast, useToast } from "@chakra-ui/react";


export const ErrorNotifier = (errorMessage) => {
  const toast = useToast();
  return toast({
    // title: "Error",
    description:
      typeof errorMessage === "string"
        ? errorMessage
        : "an error occured, please try again",
    status: "error",
    duration: 5000,
    isClosable: true,
    position: "top-right",
  });
};

export const SuccessNotifier = (info) => {
  const toast = useToast();
  return toast({
    // title: "Success",
    description: info,
    status: "success",
    duration: 5000,
    isClosable: true,
    position: "top",
  });
};

// export const customSuccessNotifier = ({ title, message, func }) => {
//   const toast = useToast();
//   return toast({
//     title,
//     description: message,
//     render: func,
//     status: "success",
//     duration: null,
//     isClosable: true,
//     position: "top-right",
//   });
// };