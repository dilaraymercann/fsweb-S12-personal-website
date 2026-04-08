import { renderHook, act } from '@testing-library/react'
import { MessageProvider, useMessage } from './MessageContext'
import { describe, test, expect, vi, beforeEach } from 'vitest'

describe('MessageContext', () => {

    beforeEach(() => {
        localStorage.clear()
        vi.spyOn(Storage.prototype, 'setItem')
    })

    test('mesaj gönderildiğinde localStorage kaydedilir', () => {
        const { result } = renderHook(() => useMessage(), {
            wrapper: MessageProvider,
        })

        act(() => {
            result.current.handleSend({
                name: 'Dilaray',
                email: 'test@mail.com',
                message: 'Merhaba',
            })
        })

        expect(localStorage.setItem).toHaveBeenCalled()
    })

    test('mesaj previous messages listesine eklenir', () => {
        const { result } = renderHook(() => useMessage(), {
            wrapper: MessageProvider,
        })

        act(() => {
            result.current.handleSend({
                name: 'Test',
                email: 'test@mail.com',
                message: 'Hello',
            })
        })

        expect(result.current.messages.length).toBe(1)
        expect(result.current.messages[0].name).toBe('Test')
    })

})