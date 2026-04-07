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
import usePostRequest from '../hooks/usePostRequest';
import { useLanguage } from '../contexts/LanguageContext';

const Message = () => {
    const { handleSend, open, setOpen } = useMessage();
    const { loading, error, postData } = usePostRequest('https://reqres.in/api/workintech');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { messageTranslations } = useLanguage();

    const onSubmit = (data) => {
        postData(data, () => {
            setOpen(false);
            setTimeout(() => reset(), 300);
        });
    };

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle sx={{ fontFamily: 'Inter', fontSize: { xs: 14, md: 16 } }}>
                {messageTranslations.title}
            </DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: { xs: 'auto', md: 500 } }}>
                <TextField
                    label={messageTranslations.name}
                    size="small"
                    fullWidth
                    sx={{ mt: 1 }}
                    InputLabelProps={{ style: { fontSize: '0.8rem' } }}
                    {...register('name', { required: 'Ad zorunludur' })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <TextField
                    label={messageTranslations.email}
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '0.8rem' } }}
                    {...register('email', {
                        required: 'E-posta zorunludur',
                        pattern: { value: /^\S+@\S+$/i, message: 'Geçerli bir e-posta girin' }
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    label={messageTranslations.message}
                    multiline
                    rows={4}
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '0.8rem' } }}
                    {...register('message', { required: 'Mesaj zorunludur' })}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                />
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2, gap: 1 }}>
                <Button
                    onClick={() => { setOpen(false); setTimeout(() => reset(), 300); }}
                    startIcon={<CloseIcon />}
                    sx={{ color: '#777777', fontFamily: 'Inter', fontSize: { xs: '0.7rem', md: '0.875rem' }, '&:hover': { backgroundColor: 'transparent' } }}
                >
                    {messageTranslations.close}
                </Button>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={handleSubmit(onSubmit)}
                    sx={{ backgroundColor: '#E92577', fontFamily: 'Inter', fontSize: { xs: '0.7rem', md: '0.875rem' }, '&:hover': { backgroundColor: '#c41e66' } }}
                >
                    {loading ? messageTranslations.sending : messageTranslations.send}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Message;