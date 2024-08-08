import { Button, Spinner, Text } from "@chakra-ui/react"
import { HiOutlineArrowNarrowRight, HiOutlinePlus } from 'react-icons/hi'
import { RxDownload, RxExit } from 'react-icons/rx'

const SecondaryButton = (props, {text, color, bg, func, loading, isDisabled, icon}) => {
    return (
        <Button 
        onClick={props.func}
        backgroundColor={bg || "#F9F5FF"}
        color={color || "#6941C6"}
        fontSize=".8rem"
        fontWeight={"600"}
        fontFamily={"Inter"}
        borderRadius={"12px"}
        padding=".9rem .6rem"
        border="1px solid #E9D7FE"
        width={"fit-content"}
        // _hover={{ backgroundColor: "#101828"}}
        // isDisabled={props?.isDisabled}
        transition={"250ms ease"}
        _disabled={{backgroundColor: "#D0D5DD", cursor: "not-allowed"}}
        {...props}
        >
       {props.loading === true ? 
       <Spinner />
       : 
       <Text ml={icon?.length > 0 ? "-.5rem" : ""} color={"#6941C6"}>
        {props?.icon === "add" && <HiOutlinePlus color="#6941C6" style={{transform: "scale(1.3) translateY(2px)", display: "inline", marginRight: ".5rem"}} />}
        {props?.text}
        {props?.icon === "next" && <HiOutlineArrowNarrowRight style={{transform: "scale(1.3) translateY(2px)", display: "inline", marginLeft: ".5rem"}} />}
        {props?.icon === "exit" && <RxExit style={{transform: "scale(1.1) translateY(2px) rotate(180deg)", display: "inline", marginLeft: ".5rem"}} />}
        {props?.icon === "download" && <RxDownload style={{transform: "scale(1.1) translateY(2px)", display: "inline", marginLeft: ".5rem"}} />}
       </Text>
       }
       </Button>
    )
}

export default SecondaryButton