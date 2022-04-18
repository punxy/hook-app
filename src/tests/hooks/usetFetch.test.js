import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hook/useFetch';

describe('Test in useFetch hook', () => {
    
    
    test('should be return default values', () => { 
        const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const state = result.current;

        expect(state).toEqual({
            data: null,
            loading: true,
            error: null
        });
    });    

    test('should be return a load data', async() => { 
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate({timeout:3000});
        const { data, loading, error } = result.current;


        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });

    test('should handling error', async() => { 
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));
        await waitForNextUpdate({timeout:3000});
        const { data, loading, error } = result.current;


        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('data could not be loaded');
    });
});