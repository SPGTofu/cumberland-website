import { Box, Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NavItem = ({name, menuItems, navigation}) => {
    const navigate = useNavigate();

    if (menuItems) {
        return(
            <Popover
                placement = 'bottom-start'
                trigger = 'hover'
            >
                <PopoverTrigger>
                    <Box
                        display = 'flex'
                        justifyContent = 'center'
                        alignItems = 'center'
                        _hover = {{ bg: '#EEEEEE', color: 'black' }} 
                        p = '12px'
                        pl = '32px'
                        pr = '32px'
                    >
                        <b>{name}</b>
                    </Box>
                </PopoverTrigger>
                <PopoverContent
                    borderRadius = '0px'
                    mt = '-8px'
                    w = '100%'
                >
                    {menuItems.map((item, index) => (
                        <Box
                            key = {index}
                            display = 'flex'
                            justifyContent = 'left'
                            alignItems = 'left'
                            _hover = {{ bg: '#EEEEEE', color: 'black' }} 
                            p = '8px'
                            pr = '30px'
                            onClick = {() => navigate(navigation[index])}
                        >
                            <b>{item}</b>
                        </Box>
                    ))}
                </PopoverContent>
            </Popover>
        );
    }

    return (  
        <Box
            display = 'flex'
            justifyContent = 'center'
            alignItems = 'center'
            _hover = {{ bg: '#EEEEEE', color: 'black' }} 
            onClick = {() => navigate(navigation)}
            p = '12px'
            pl = '32px'
            pr = '32px'
        >
            <b>{name}</b>
        </Box>
    );
}
 
export default NavItem;