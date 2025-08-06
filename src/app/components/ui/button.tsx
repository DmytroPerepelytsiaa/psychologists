import { ButtonAppearance } from '@types/ui.type';

interface ButtonProps {
  children: React.ReactNode;
  classes?: string;
  appearance?: ButtonAppearance;
}

const appearanceClasses = {
  [ButtonAppearance.Primary]: 'bg-orange-primary-color hover:bg-orange-secondary-color text-white-primary-color',
  [ButtonAppearance.Secondary]: 'bg-white-primary-color hover:bg-orange-primary-color-10 text-black-primary-color border border-black-primary-color-20',
}

// TODO: add clsx for classes
export const Button = ({ children, classes = '', appearance = ButtonAppearance.Primary }: ButtonProps) => {
  return (
    <button 
      className={appearanceClasses[appearance] + ' px-10 py-3.5 rounded-full transition-colors duration-300 font-medium ' + classes}
    >
      {children}
    </button>
  );
}
