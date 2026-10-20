import { Card, CardContent, Typography, Box } from "@mui/material";
import PropTypes from 'prop-types';

const DefaultInfoCard = ({ icon: IconComponent, title, description, value, color, iconBgColor }) => {
  return (
    <Card 
      sx={{ 
        minWidth: 275, 
        borderRadius: 3, 
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
          "& .icon-box": {
            transform: "scale(1.1)",
            backgroundColor: color,
          },
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          className="icon-box"
          sx={{
            backgroundColor: iconBgColor || color || "gray",
            width: 60,
            height: 60,
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 2,
            transition: "all 0.3s ease-in-out",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "16px",
              background: `linear-gradient(45deg, ${color} 0%, ${color}80 100%)`,
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
            },
            "&:hover::after": {
              opacity: 1,
            },
          }}
        >
          {IconComponent && (
            <IconComponent 
              sx={{ 
                color: "white", 
                fontSize: 32,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }} 
            />
          )}
        </Box>
        <Typography 
          variant="caption" 
          color="textSecondary"
          sx={{ 
            display: "block",
            mb: 1,
            fontWeight: 500,
            letterSpacing: "0.5px",
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="h4" 
          fontWeight="bold"
          sx={{ 
            mb: 1,
            background: `linear-gradient(45deg, ${color} 0%, ${color}80 100%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          {value}
        </Typography>
        <Typography 
          variant="body2" 
          color="textSecondary"
          sx={{ 
            lineHeight: 1.6,
            opacity: 0.8,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

DefaultInfoCard.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  color: PropTypes.string,
  iconBgColor: PropTypes.string,
};

export default DefaultInfoCard;
