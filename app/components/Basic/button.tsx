import React from 'react';
import { Button } from 'antd';

interface ButtonProps {
  Text: string;
  htmlType?: 'button' | 'submit' | 'reset'; 
  buttonClass?: string; 
  Disable: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({ Text, buttonClass , htmlType="submit", Disable }) => {
  return (
    <div>
      <Button className={buttonClass}  htmlType={htmlType}  disabled={Disable}>
        {Text}
      </Button>
    </div>
  );
};

export default CustomButton;

