import React, { useEffect } from "react";
import "./UIStates.css";

export const PageLoading = ({ message = "Loading page..." }) => (
  <div className="uiLoadingWrap">
    <div className="uiSpinner" />
    <p>{message}</p>
  </div>
);

export const InlineMessage = ({ type = "success", message }) => {
  if (!message) return null;
  return <div className={`uiMessage ${type}`}>{message}</div>;
};

export const EmptyState = ({ title = "No data found", subtitle = "Try another filter or add new items." }) => (
  <div className="uiEmpty">
    <h4>{title}</h4>
    <p>{subtitle}</p>
  </div>
);

export const ConfirmDialog = ({
  open,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmText = "Delete",
  cancelText = "Cancel",
  confirmVariant = "danger",
  onConfirm,
  onCancel,
}) => {
  useEffect(() => {
    if (!open) return undefined;
    const onEsc = (e) => {
      if (e.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div className="uiDialogBackdrop" onClick={onCancel}>
      <div className="uiDialog" onClick={(e) => e.stopPropagation()}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="uiDialogActions">
          <button type="button" className="ghostBtn" onClick={onCancel}>
            {cancelText}
          </button>
          <button
            type="button"
            className={confirmVariant === "danger" ? "dangerBtn" : "successBtn"}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
