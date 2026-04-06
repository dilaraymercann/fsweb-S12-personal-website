import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useMessage } from '../contexts/MessageContext';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import usePostRequest from '../hooks/usePostRequest';

const Message = () => {
    const { handleSend, open, setOpen } = useMessage();
    const { loading, error, postData } = usePostRequest('https://reqres.in/api/workintech');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        postData(data, () => {
            setOpen(false);
            setTimeout(() => reset(), 300);
        });
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle sx={{ fontFamily: 'Inter', fontSize: 16 }}>
                Mesaj Gönder
            </DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 500 }}>
                <TextField
                    label="Adınız"
                    size="small"
                    fullWidth
                    sx={{ mt: 1 }}
                    {...register('name', { required: 'Ad zorunludur' })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <TextField
                    label="E-posta"
                    size="small"
                    fullWidth
                    {...register('email', {
                        required: 'E-posta zorunludur',
                        pattern: { value: /^\S+@\S+$/i, message: 'Geçerli bir e-posta girin' }
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    label="Mesajınız"
                    multiline
                    rows={4}
                    fullWidth
                    {...register('message', { required: 'Mesaj zorunludur' })}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                />
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2, gap: 1 }}>
                <Button
                    onClick={() => { setOpen(false); setTimeout(() => reset(), 300); }}
                    startIcon={<CloseIcon />}
                    sx={{ color: '#777777', fontFamily: 'Inter', '&:hover': { backgroundColor: 'transparent' } }}
                >
                    Kapat
                </Button>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={handleSubmit(onSubmit)}
                    sx={{ backgroundColor: '#E92577', fontFamily: 'Inter', '&:hover': { backgroundColor: '#c41e66' } }}
                >
                    {loading ? 'Gönderiliyor...' : 'Gönder'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Message;