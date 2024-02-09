import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ChatIcon from '@mui/icons-material/Chat';
import { socket } from '../Utils/helpers.js';
import { Box, Slide, Stack, TextField, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ScrollDialog(props) {
    let [messege, setMessegeValue] = React.useState("");
    let [allmessege, setAllMessegeValue] = React.useState([]);
    let allGetMesseges = () => {
        socket.on("allMesseges", async (data) => {
            setAllMessegeValue(data);
            console.log(data);
        })
    }
    allGetMesseges()

    let sendMessege = () => {
        socket.emit("messge", {
            sender: `Admin${props.name}`,
            reciver: props.name,
            content: messege
        });
        allGetMesseges()
    }
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        socket.emit("chatGet", {
            name: props.name
        })

        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    const test = React.useRef(null);

    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <React.Fragment>
            <Box onClick={handleClickOpen('paper')}><ChatIcon /></Box>
            <Dialog
                TransitionComponent={Transition}
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                PaperProps={{
                    sx: {
                        width: '100%',
                        maxWidth: '600px',
                    },
                }}
            >
                <DialogTitle sx={{
                    display: "flex",
                    alignItems: "center",
                }} id="scroll-dialog-title">
                    <Avatar sx={{
                        marginRight: 1
                    }} alt={props.name} src="/static/images/avatar/1.jpg" />
                    {props.name}
                </DialogTitle>
                <DialogContent sx={{
                    height: '400px',
                    width: '100%',
                    
                        overflowY: 'auto',
                    
                }} dividers={scroll === 'paper'}>
                    {allmessege.length > 0 && allmessege.map((v, i) => (
                        <div key={i} className={`flex ${v.sender == props.name ? 'justify-start' : 'justify-end'}`}>
                            <span className='rounded-sm p-2 m-2 text-[#fff] bg-[#001f3f]'>
                                {v.content}
                            </span>
                        </div>
                    ))}



                </DialogContent>
                <DialogActions>

                    <Stack

                        sx={{
                            width: '100%',
                        }}
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            placeholder='Type something...'
                            variant="filled"
                            onChange={(e) => setMessegeValue(e.target.value)}
                        />
                    </Stack>
                    <Stack onClick={sendMessege}>
                        <SendIcon className=' cursor-pointer' />
                    </Stack>


                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};