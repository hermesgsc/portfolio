"use client";

import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Typography from "./Typography";
import { motion } from "motion/react";

interface EncryptButtonProps {
  targetText?: string;
  cyclesPerLetter?: number;
  shuffleTime?: number;
  chars?: string;
  onClick?: () => void;
  onHover?: boolean;
  children?: React.ReactNode;
}

const EncryptButton: React.FC<EncryptButtonProps> = ({
  targetText = "Know me",
  cyclesPerLetter = 5,
  shuffleTime = 50,
  chars = "!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{!@#$%^&*()_+}{}{",
  onClick,
}) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [text, setText] = useState<string>(targetText);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = targetText
        .split("")
        .map((char, index) => {
          if (pos / cyclesPerLetter > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * chars.length);
          return chars[randomCharIndex];
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= targetText.length * cyclesPerLetter) {
        stopScramble();
      }
    }, shuffleTime);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setText(targetText);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={onClick}
      className="bg-secondary-800 rounded-xl border-secondary-700 border gap-3 group relative overflow-hidden px-4 py-2 font-medium text-secondary-300 transition-colors hover:text-primary-500"
    >
      <div className="relative z-10 flex items-center gap-2">
        <Typography className="text-sm">{text}</Typography>
        <Icon
          className="hover:text-primary-500"
          icon="arrow-down-wide-fill"
          width="24"
          height="24"
        />
      </div>
    </motion.button>
  );
};

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  targetText?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className="grid min-h-[200px] place-content-center p-4">
      <EncryptButton onClick={onClick} onHover={true} />
    </div>
  );
};

export default Button;
