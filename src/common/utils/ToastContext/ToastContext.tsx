import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const ToastContext = React.createContext({
    // isOpen: false,
    // message: "",
    // setOpen: (open: boolean) => {},
    // handleClose: () => {},
    showToast: (msg: string) => {},
  });

export default function ToastContextProvider(props: any) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const showToast = (msg: string) => {
        setMessage(msg);
        setIsOpen(true);
    }

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
        return;
        }

        setIsOpen(false);
    };

    return (
        <ToastContext.Provider value={{showToast}}>
            {props.children}
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {message}
                </Alert>
            </Snackbar>
        </ToastContext.Provider>
    )
}
