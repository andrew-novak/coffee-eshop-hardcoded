import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const QuantityInput = ({
  value,
  maxValue = 20,
  style,
  isVertical,
  isSmall,
  onChange,
}) => {
  const onIncrease = () => {
    const newQuantity = value + 1;
    if (newQuantity > maxValue) return;
    onChange(newQuantity);
  };

  const onDecrease = () => {
    const newQuantity = value - 1;
    if (newQuantity < 1) return;
    onChange(newQuantity);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isVertical && "column",
        justifyContent: "center",
        alignItems: "center",
        gap: isSmall ? 2 : 8,
        ...style,
      }}
    >
      <IconButton onClick={onIncrease}>
        <AddIcon style={{ fontSize: isSmall ? 24 : 32 }} />
      </IconButton>
      <Typography
        style={{
          fontSize: isSmall ? 15 : 20,
          padding: "14px",
          border: "1px solid",
          borderColor: "rgba(0, 0, 0, 0.23)",
          borderRadius: 4,
        }}
      >
        {value}
      </Typography>
      <IconButton onClick={onDecrease}>
        <RemoveIcon style={{ fontSize: isSmall ? 24 : 32 }} />
      </IconButton>
    </div>
  );
};
export default QuantityInput;
