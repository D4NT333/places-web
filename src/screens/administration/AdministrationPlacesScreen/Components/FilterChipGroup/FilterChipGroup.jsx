import React from "react";

import styles from "./styles";

function getToneStyle(
  tone,
) {
  if (tone === "green") {
    return styles.toneGreen;
  }

  if (tone === "orange") {
    return styles.toneOrange;
  }

  if (tone === "red") {
    return styles.toneRed;
  }

  if (tone === "violet") {
    return styles.toneViolet;
  }

  return styles.toneBlue;
}

export default function FilterChipGroup({
  title,
  titleIcon: TitleIcon,
  options,
  selectedValue,
  onChange,
}) {
  return (
    <div
      style={
        styles.container
      }
    >
      <div
        style={
          styles.titleRow
        }
      >
        {TitleIcon ? (
          <div
            style={
              styles.titleIcon
            }
          >
            <TitleIcon
              size={60}
              strokeWidth={2.2}
            />
          </div>
        ) : null}

        <h3
          style={
            styles.title
          }
        >
          {title}
        </h3>
      </div>

      <div
        style={
          styles.chipsRow
        }
      >
        {options.map(
          (option) => {
            const isSelected =
              selectedValue ===
              option.value;

            const OptionIcon =
              option.icon;

            return (
              <button
                key={
                  option.value
                }
                type="button"
                onClick={() =>
                  onChange(
                    option.value,
                  )
                }
                style={{
                  ...styles.chip,
                  ...getToneStyle(
                    option.tone,
                  ),

                  ...(isSelected
                    ? styles.chipSelected
                    : {}),
                }}
              >
                {OptionIcon ? (
                  <OptionIcon
                    size={40}
                    strokeWidth={2.25}
                  />
                ) : null}

                <span>
                  {
                    option.label
                  }
                </span>
              </button>
            );
          },
        )}
      </div>
    </div>
  );
}