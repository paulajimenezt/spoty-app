import React, { useState } from "react";
import { ChromePicker } from "react-color";
import rgbHex from "rgb-hex";

function ColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState("#000022");
  const [primaryColor, setPrimaryColor] = useState("#001242");
  const [secondaryColor, setSecondaryColor] = useState("#25a52b");
  const [tertiaryColor, setTertiaryColor] = useState("#1f6c70");
  const [fontColor, setFontColor] = useState("#fffff");

  const handleColorChange = (variableName, newColor) => {
    document.documentElement.style.setProperty(variableName, newColor);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: `var(--background-color)`,
        justifyContent: "space-around",
        color: "black",
      }}
    >
      <div>
        <label>Background Color:</label>
        <ChromePicker
          color={backgroundColor}
          onChange={(color) => {
            console.log(`color: ${JSON.stringify(color.rgb)}`);
            setBackgroundColor(
              "#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)
            );
            handleColorChange(
              "--background-color",
              "#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)
            );
          }}
        />
      </div>
      <div>
        <label>Font Color:</label>
        <ChromePicker
          color={fontColor}
          onChange={(color) => {
            setFontColor(
              "#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)
            );
            handleColorChange(
              "--font-color",
              "#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)
            );
          }}
        />
      </div>
      <div>
        <label>Primary Color:</label>
        <ChromePicker
          color={primaryColor}
          onChange={(color) => {
            setPrimaryColor(
              "#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)
            );
            handleColorChange(
              "--primary-color",
              "#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)
            );
          }}
        />
      </div>
      <div>
        <label>Secondary Color:</label>
        <ChromePicker
          color={secondaryColor}
          onChange={(color) => {
            setSecondaryColor(
              "#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)
            );
            handleColorChange(
              "--secondary-color",
              "#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)
            );
          }}
        />
      </div>
      <div>
        <label>Tertiary Color:</label>
        <ChromePicker
          color={tertiaryColor}
          onChange={(color) => {
            setTertiaryColor(
              "#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)
            );
            handleColorChange(
              "--tertiary-color",
              "#" + rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)
            );
          }}
        />
      </div>
    </div>
  );
}

export default ColorPicker;
