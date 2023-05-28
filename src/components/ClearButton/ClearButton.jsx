import s from './ClearButton.module.css';
const ClearButton = ({ clearContact }) => (
  <button
    className={s.clearButton}
    type="button"
    onClick={() => {
      if (window.confirm('Are you sure you wish to delete all contacts?')) {
        clearContact();
      }
    }}
  >
    Delete all contacts
  </button>
);
export default ClearButton;
