import { Button, Spinner, Text } from "@chakra-ui/react"
import { HiOutlineArrowNarrowRight, HiOutlinePlus } from 'react-icons/hi'
import { RxExit } from 'react-icons/rx'

const PrimaryButton = (props, {text, color, bg, func, loading, isDisabled, icon}) => {
    return (
        <Button 
        onClick={props.func}
        backgroundColor={bg || "#E66F15"}
        color={color || "#FFFFFF"}
        fontSize=".9rem"
        fontWeight={"600"}
        fontFamily={"ClashDisplay-Bold"}
        borderRadius={"24px"}
        padding="1.6rem 1.5rem"
        width={"100%"}
        _hover={{ backgroundColor: "#101828"}}
        // isDisabled={props?.isDisabled}
        transition={"250ms ease"}
        _disabled={{backgroundColor: "#D0D5DD", cursor: "not-allowed"}}
        {...props}
        >
       {props.loading === true ? 
       <Spinner />
       : 
       <Text ml={icon?.length > 0 ? "-.5rem" : ""} color={"#FFF"}>
        {props?.text}
        {props?.icon === "next" && <HiOutlineArrowNarrowRight style={{transform: "scale(1.3) translateY(2px)", display: "inline", marginLeft: ".5rem"}} />}
        {props?.icon === "add" && <HiOutlinePlus style={{transform: "scale(1.3) translateY(2px)", display: "inline", marginLeft: ".5rem"}} />}
        {props?.icon === "exit" && <RxExit style={{transform: "scale(1.1) translateY(2px) rotate(180deg)", display: "inline", marginLeft: ".5rem"}} />}
       </Text>
       }
       </Button>
    )
}

export default PrimaryButton