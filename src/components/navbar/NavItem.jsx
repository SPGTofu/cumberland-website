import { Popover, PopoverContent, PopoverTrigger, Text, Box, useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import PropTypes, { any, string } from "prop-types";

const NavItem = ({ name, menuItems, navigation }) => {
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({ base: false, md: true });

  if (menuItems) {
    // Desktop: hover dropdown
    if (isDesktop) {
      return (
        <Popover placement="bottom-start" trigger="hover">
          <PopoverTrigger>
            <Text
              textStyle="h3"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 'clamp(0.5rem, 1vw, 2rem)',
                py: 'clamp(0.25rem, 0.5vw, 1rem)',
                cursor: "pointer",
                _hover: { opacity: 0.5 },
              }}
            >
              {name}
            </Text>
          </PopoverTrigger>

          <PopoverContent
            sx={{
              borderRadius: "0rem",
              mt: "-0.5rem",
              width: "100%",
            }}
          >
            {menuItems.map((item, index) => (
              <Text
                textStyle="h3"
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  px: 'clamp(0.5rem, 1vw, 2rem)',
                  py: 'clamp(0.25rem, 0.5vw, 1rem)',
                  cursor: "pointer",
                  _hover: { opacity: 0.5 },
                }}
                onClick={() => navigate(navigation[index])}
              >
                {item}
              </Text>
            ))}
          </PopoverContent>
        </Popover>
      );
    }

    // Mobile: stacked list (no popover)
    return (
      <Box display='flex' alignItems='center' flexDirection='column'>
        <Text
          textStyle="h3"
          sx={{
            px: 'clamp(0.5rem, 1vw, 2rem)',
            py: 'clamp(0.5rem, 1vw, 1rem)',
            fontWeight: 'bold',
          }}
        >
          {name}
        </Text>

        <Box sx={{ pl: '1rem', display: 'flex', flexDirection: 'column', w: '100%', justifyContent:'flex-start' }}>
          {menuItems.map((item, index) => (
            <Text
              key={index}
              textStyle="h3"
              sx={{
                px: 'clamp(0.5rem, 1vw, 2rem)',
                py: 'clamp(0.25rem, 0.5vw, 1rem)',
                cursor: "pointer",
                opacity: 0.85,
                _hover: { opacity: 1 },
              }}
              onClick={() => navigate(navigation[index])}
            >
              {item}
            </Text>
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Text
      textStyle="h3"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 'clamp(0.5rem, 1vw, 2rem)',
        py: 'clamp(0.25rem, 0.5vw, 1rem)',
        cursor: "pointer",
        _hover: { opacity: 0.5 },
      }}
      onClick={() => navigate(navigation)}
    >
      {name}
    </Text>
  );
};

NavItem.propTypes = {
  name: PropTypes.string,
  menuItems: PropTypes.arrayOf(any),
  navigation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(string),
  ]),
};

export default NavItem;
