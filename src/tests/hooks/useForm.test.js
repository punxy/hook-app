import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hook/useForm';

describe('Test in useForm hook', () => {

    const initialForm = {
        name: 'Sebastián Silva',
        email: 'sebasilvac88@gmail.com',
    };

    test('should be return default values', () => { 
        const { result } = renderHook(useForm);
        const [ values, handleInputChange, reset ] = result.current;
    
        expect(values).toEqual({});
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('should be return a default form', () => { 
        const { result } = renderHook(() => useForm(initialForm));
        const [ values ] = result.current;
        expect(values).toEqual(initialForm);
    });

    test('should change the values ​​of the form', () => { 
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange ] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Nuevo nombre'
                }
            });
        });

        const [ values ] = result.current;
        expect(values.name).toBe('Nuevo nombre');
        expect(values.email).toBe(initialForm.email);
    });

    test('should be reset the values ​​of the form', () => { 
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, reset ] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Nuevo nombre'
                }
            });

            reset();
        });

        const [ values ] = result.current;
        expect(values).toEqual(initialForm);
    });
});
