import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import { useMessage } from '../contexts/MessageContext';
import { useLanguage } from '../contexts/LanguageContext';
import { formatDistanceToNow } from 'date-fns';
import { tr, enUS } from 'date-fns/locale';

const MessageHistory = () => {
    const { messages, historyOpen, setHistoryOpen, setOpen } = useMessage();
    const { language, messageTranslations } = useLanguage();

    return (
        <Dialog open={historyOpen} onClose={() => setHistoryOpen(false)} fullWidth maxWidth="sm">
            <DialogTitle sx={{ fontFamily: 'Inter', fontSize: { xs: 14, md: 16 }, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {messageTranslations.previous}
            </DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: { xs: 'auto', md: 500 } }}>
                {messages.length === 0 ? (
                    <Typography sx={{ fontFamily: 'Inter', fontSize: '0.85rem', color: '#777777', textAlign: 'center', py: 4 }}>
                        Henüz mesaj gönderilmedi.
                    </Typography>
                ) : (
                    messages.map((msg, index) => (
                        <div key={index}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography sx={{ fontFamily: 'Inter', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                        {msg.name}
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Inter', fontSize: '0.7rem', color: '#777777' }}>
                                        {formatDistanceToNow(new Date(msg.date), {
                                            addSuffix: true,
                                            locale: language === 'tr' ? tr : enUS,
                                        })}
                                    </Typography>
                                </div>
                                <Typography sx={{ fontFamily: 'Inter', fontSize: '0.75rem', color: '#777777' }}>
                                    {msg.email}
                                </Typography>
                                <Typography sx={{ fontFamily: 'Inter', fontSize: '0.85rem' }}>
                                    {msg.message}
                                </Typography>
                            </div>
                            {index < messages.length - 1 && <Divider sx={{ mt: 2 }} />}
                        </div>
                    ))
                )}
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button
                    onClick={() => setHistoryOpen(false)}
                    startIcon={<CloseIcon />}
                    sx={{ color: '#777777', fontFamily: 'Inter', fontSize: { xs: '0.7rem', md: '0.875rem' }, '&:hover': { backgroundColor: 'transparent' } }}
                >
                    Kapat
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default MessageHistory;