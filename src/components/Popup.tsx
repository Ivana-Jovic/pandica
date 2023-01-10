function Popup({
  children,
  open,
  onClose,
}: {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`modal ${open ? "modal-open" : ""} `}
      //   onKeyDown={(e) => {
      //     if (e.key === "Escape") onClose();
      //   }}
      //   tabIndex={-1}
    >
      <div className="relative modal-box bg-darkGreen flex flex-col items-center  justify-evenly">
        <div
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </div>
        {children}
      </div>
    </div>
  );
}

export default Popup;
