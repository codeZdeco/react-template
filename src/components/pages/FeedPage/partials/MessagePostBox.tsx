import { TextField, Box, styled } from "@mui/material";
import { SectionBox } from "components/commons";

const MessageField = styled(TextField)(
  ({ theme }) => `
  & .MuiInput-input {
    padding-left: ${theme.spacing(2)};
    padding-right: ${theme.spacing(2)};
  }
`,
);

function MessagePostBox() {
  return (
    <SectionBox
      className='flex flex-col min-h-[6rem] justify-between'
      sx={{
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
    >
      <Box></Box>
      <MessageField
        variant='standard'
        rows={2}
        placeholder='Post new message'
        multiline
      />
    </SectionBox>
  );
}

export default MessagePostBox;
