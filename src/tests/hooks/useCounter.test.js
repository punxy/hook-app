import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hook/useCounter';

describe('Test in useCounter hook', () => {

    test('should be return default values', () => { 
        const { result } = renderHook(useCounter);

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('should show the counter at 100', () => { 
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test('should be increment the counter in one', () => { 
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        act(() => {
            increment();
        });

        const { counter } = result.current;
        expect(counter).toBe(101);
    });

    test('should be decrement the counter in one', () => { 
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;
        act(() => {
            decrement();
        });

        const { counter } = result.current;
        expect(counter).toBe(99);
    });

    test('should be reset the counter', () => { 
        const { result } = renderHook(() => useCounter(100));
        const { decrement, reset } = result.current;
        act(() => {
            decrement(); // solo se ejecuta una sola vez
            reset();
        });

        const { counter } = result.current;
        expect(counter).toBe(100);
    });
});