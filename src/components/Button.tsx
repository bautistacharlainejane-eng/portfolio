type ButtonProps = {
  className: string; 
  children: React.ReactNode;
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button className={`p-3 ${className}`}>
      {children}
    </button>
  );
}
