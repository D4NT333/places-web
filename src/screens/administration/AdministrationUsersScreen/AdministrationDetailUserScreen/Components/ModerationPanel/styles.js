import { css } from "@emotion/css";

const styles = {
  overlay: css`
    position: fixed;
    inset: 0;
    z-index: 1000;

    display: flex;
    justify-content: flex-end;

    background: rgba(15, 23, 42, 0.38);
    backdrop-filter: blur(2px);
  `,

  panel: css`
    width: min(520px, 100%);
    height: 100vh;

    display: flex;
    flex-direction: column;

    background: #ffffff;
    border-left: 1px solid #d9e0ea;
    box-shadow: -12px 0 32px rgba(15, 23, 42, 0.16);

    animation: moderation-panel-enter 180ms ease-out;

    @keyframes moderation-panel-enter {
      from {
        transform: translateX(100%);
      }

      to {
        transform: translateX(0);
      }
    }
  `,

  header: css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;

    padding: 24px;
    border-bottom: 1px solid #e3e8ef;
  `,

  headerLabel: css`
    display: block;
    margin-bottom: 4px;

    color: #64748b;
    font-size: 13px;
    font-weight: 700;
  `,

  title: css`
    margin: 0;

    color: #111827;
    font-size: 24px;
    line-height: 1.25;
  `,

  userName: css`
    margin: 7px 0 0;

    color: #475569;
    font-size: 14px;
    font-weight: 600;
  `,

  closeButton: css`
    width: 38px;
    height: 38px;

    flex-shrink: 0;

    display: grid;
    place-items: center;

    padding: 0;

    color: #111827;
    background: #ffffff;
    border: 1px solid #d7dde6;
    border-radius: 10px;

    font-size: 27px;
    line-height: 1;

    cursor: pointer;

    &:hover:not(:disabled) {
      background: #f1f5f9;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }
  `,

  form: css`
    min-height: 0;
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 22px;

    padding: 24px;
    overflow-y: auto;
  `,

  section: css`
    display: flex;
    flex-direction: column;
    gap: 9px;
  `,

  sectionTitle: css`
    margin: 0;

    color: #1e293b;
    font-size: 15px;
  `,

  sanctionTypeGrid: css`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;

    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  `,

  sanctionTypeButton: css`
    min-height: 124px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    padding: 16px;

    color: #334155;
    text-align: left;

    background: #ffffff;
    border: 1px solid #d8dee8;
    border-radius: 12px;

    cursor: pointer;
    transition:
      border-color 150ms ease,
      box-shadow 150ms ease,
      background 150ms ease;

    &:hover:not(:disabled) {
      border-color: #94a3b8;
      background: #f8fafc;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `,

  sanctionTypeButtonActive: css`
    background: #f3f7ff;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);
  `,

  permanentButtonActive: css`
    background: #fff5f5;
    border-color: #dc2626;
    box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.1);
  `,

  sanctionTypeName: css`
    color: #0f172a;
    font-size: 15px;
    font-weight: 800;
  `,

  sanctionTypeDescription: css`
    color: #64748b;
    font-size: 13px;
    line-height: 1.45;
  `,

  labelRow: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  `,

  label: css`
    color: #1e293b;
    font-size: 14px;
    font-weight: 750;
  `,

 characterCount: css`
  align-self: flex-end;

  margin-top: -3px;

  color: #64748b;
  font-size: 12px;
`,

  select: css`
    width: 100%;
    min-height: 44px;

    padding: 0 12px;

    color: #172033;
    background: #ffffff;
    border: 1px solid #cfd7e3;
    border-radius: 9px;

    font: inherit;

    outline: none;

    &:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    }

    &:disabled {
      cursor: not-allowed;
      background: #f1f5f9;
    }
  `,

  textarea: css`
    width: 100%;
    min-height: 130px;

    padding: 12px;

    color: #172033;
    background: #ffffff;
    border: 1px solid #cfd7e3;
    border-radius: 9px;

    font: inherit;
    line-height: 1.5;

    resize: vertical;
    outline: none;

    box-sizing: border-box;

    &:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    }

    &:disabled {
      cursor: not-allowed;
      background: #f1f5f9;
    }
  `,

  inputError: css`
    border-color: #dc2626;

    &:focus {
      border-color: #dc2626;
      box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    }
  `,

  errorMessage: css`
    margin: 0;

    color: #c81e1e;
    font-size: 12px;
    font-weight: 650;
  `,

  warningBox: css`
    padding: 15px;

    color: #713f12;
    background: #fffbeb;
    border: 1px solid #f4d88a;
    border-radius: 10px;

    font-size: 13px;
    line-height: 1.5;

    p {
      margin: 5px 0 0;
    }
  `,

  permanentWarningBox: css`
    color: #7f1d1d;
    background: #fff1f2;
    border-color: #fecaca;
  `,

  confirmationSection: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  checkboxLabel: css`
    display: flex;
    align-items: flex-start;
    gap: 10px;

    color: #334155;
    font-size: 13px;
    line-height: 1.45;

    cursor: pointer;

    input {
      width: 16px;
      height: 16px;

      flex-shrink: 0;
      margin-top: 2px;

      accent-color: #111827;
    }
  `,

  footer: css`
    position: sticky;
    bottom: -24px;

    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 12px;

    margin: auto -24px -24px;
    padding: 18px 24px 24px;

    background: #ffffff;
    border-top: 1px solid #e3e8ef;

    @media (max-width: 430px) {
      grid-template-columns: 1fr;
    }
  `,

  cancelButton: css`
    min-height: 44px;

    padding: 0 18px;

    color: #1f2937;
    background: #ffffff;
    border: 1px solid #bfc8d4;
    border-radius: 9px;

    font-weight: 750;
    cursor: pointer;

    &:hover:not(:disabled) {
      background: #f8fafc;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }
  `,

  submitButton: css`
    min-height: 44px;

    padding: 0 18px;

    color: #ffffff;
    background: #111827;
    border: 1px solid #111827;
    border-radius: 9px;

    font-weight: 800;
    cursor: pointer;

    &:hover:not(:disabled) {
      background: #000000;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }
  `,

  permanentSubmitButton: css`
    background: #b91c1c;
    border-color: #b91c1c;

    &:hover:not(:disabled) {
      background: #991b1b;
    }
  `,
  userInformation: css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: 7px;
`,

userName: css`
  margin: 0;

  color: #475569;
  font-size: 14px;
  font-weight: 700;
`,

statusChip: css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 23px;
  padding: 2px 10px;

  border: 1px solid;
  border-radius: 999px;

  font-size: 11px;
  font-weight: 800;
  line-height: 1;
`,

activeStatusChip: css`
  color: #166534;
  background: #f0fdf4;
  border-color: #86efac;
`,

observationStatusChip: css`
  color: #854d0e;
  background: #fefce8;
  border-color: #fde047;
`,

warnedStatusChip: css`
  color: #9a3412;
  background: #fff7ed;
  border-color: #fdba74;
`,

blockedStatusChip: css`
  color: #991b1b;
  background: #fef2f2;
  border-color: #fca5a5;
`,
};

export default styles;