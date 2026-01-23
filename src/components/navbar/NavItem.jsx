import { Popover, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import PropTypes, { any, string } from "prop-types";

const NavItem = ({name, menuItems, navigation}) => {
    const navigate = useNavigate();

    if (menuItems) {
        return(
            <Popover
                placement = 'bottom-start'
                trigger = 'hover'
            >
                <PopoverTrigger>
                    <Text
                        textStyle='h3'
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            px: '2rem',
                            py: '1rem',
                            cursor: 'pointer',
                            _hover: { opacity: 0.5 },
                        }}
                    >
                        {name}
                    </Text>
                </PopoverTrigger>
                <PopoverContent
                    sx={{
                        borderRadius: '0rem',
                        mt: '-0.5rem',
                        width: '100%',
                    }}
                >
                    {menuItems.map((item, index) => (
                        <Text
                            textStyle='h3'
                            key = {index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                px: '2rem',
                                py: '0.5rem',
                                cursor: 'pointer',
                                _hover: { opacity: 0.5 },
                            }}
                            onClick = {() => navigate(navigation[index])}
                        >
                            {item}
                        </Text>
                    ))}
                </PopoverContent>
            </Popover>
        );
    }

    return (  
        <Text
            textStyle='h3'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: '2rem',
                py: '1rem',
                cursor: 'pointer',
                _hover: { opacity: 0.5 },

            }}
            onClick = {() => navigate(navigation)}
        >
            {name}
        </Text>
    );
}
 
NavItem.propTypes = {
    name: PropTypes.string,
    menuItems: PropTypes.arrayOf(any),
    navigation: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(string)])
}
export default NavItem;