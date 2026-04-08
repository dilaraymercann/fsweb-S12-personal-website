import { render, screen, fireEvent } from '@testing-library/react'
import MessageHistory from './MessageHistory'
import { vi } from 'vitest'

vi.mock('../contexts/MessageContext', () => ({
    useMessage: vi.fn(),
}))

vi.mock('../contexts/LanguageContext', () => ({
    useLanguage: vi.fn(),
}))

import { useMessage } from '../contexts/MessageContext'
import { useLanguage } from '../contexts/LanguageContext'

describe('MessageHistory', () => {

    beforeEach(() => {
        useMessage.mockReturnValue({
            messages: [],
            historyOpen: true,
            setHistoryOpen: vi.fn(),
            setOpen: vi.fn(),
        })

        useLanguage.mockReturnValue({
            language: 'tr',
            messageTranslations: {
                previous: 'Önceki Mesajlar',
            },
        })
    })

    test('boş mesaj durumunu gösterir', () => {
        render(<MessageHistory />)

        expect(
            screen.getByText(/Henüz mesaj gönderilmedi/i)
        ).toBeInTheDocument()
    })

    test('mesajları render eder', () => {
        useMessage.mockReturnValue({
            messages: [
                {
                    name: 'Dilaray',
                    email: 'test@mail.com',
                    message: 'Merhaba',
                    date: new Date().toISOString(),
                },
            ],
            historyOpen: true,
            setHistoryOpen: vi.fn(),
            setOpen: vi.fn(),
        })

        render(<MessageHistory />)

        expect(screen.getByText('Dilaray')).toBeInTheDocument()
        expect(screen.getByText('test@mail.com')).toBeInTheDocument()
        expect(screen.getByText('Merhaba')).toBeInTheDocument()
    })

    test('kapat butonuna basınca dialog kapanır', () => {
        const mockClose = vi.fn()

        useMessage.mockReturnValue({
            messages: [],
            historyOpen: true,
            setHistoryOpen: mockClose,
            setOpen: vi.fn(),
        })

        render(<MessageHistory />)

        fireEvent.click(screen.getByText(/Kapat/i))

        expect(mockClose).toHaveBeenCalled()
    })

})