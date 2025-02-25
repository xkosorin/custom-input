import CustomInput from "./components/CustomInput";

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem'}}>
      <CustomInput id="customInput" label="Input" secondaryLabel="Default" placeholder="Placeholder" />
      <CustomInput id="customInputWarning" label="Input" secondaryLabel="Warning" placeholder="Placeholder" variant="warning" />
      <CustomInput id="customInputError" label="Input" secondaryLabel="Error" placeholder="Placeholder" variant="error" />
    </div>
  );
}

export default App;
