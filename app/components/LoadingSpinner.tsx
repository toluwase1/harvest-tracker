interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className={`animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 ${className || ''}`}></div>
    </div>
  )
}

export default LoadingSpinner
