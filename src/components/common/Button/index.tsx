export default function Button({
  children,
  className = 'text-white bg-indigo-600 hover:bg-indigo-700',
  ...rest
}) {
  return (
    <button
      {...rest}
      className={`rounded-md border px-8 py-3 text-base font-medium disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  )
}
