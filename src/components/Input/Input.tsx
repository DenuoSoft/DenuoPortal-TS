import {InputProps} from '../../models/input';
import {InputBlock, InputWrapper, ClearButton} from './Input.styled';

export const Input = ({
	value,
	onChange,
	placeholder,
	showClearButton = true, 
	...rest
}: InputProps & {showClearButton?: boolean}) => {
	const clearInput = () => {
			const syntheticEvent = {
			target: {value: ''},
			currentTarget: {value: ''},
		} as React.ChangeEvent<HTMLInputElement>;

		onChange?.(syntheticEvent);
	};

	return (
		<InputWrapper>
			<InputBlock
				type="text"
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				$hasClearButton={showClearButton && !!value} 
				{...rest}
			/>
			{showClearButton && value && (
				<ClearButton
					type="button"
					onClick={clearInput}
					aria-label="Очистить поле"
				>
					✖
				</ClearButton>
			)}
		</InputWrapper>
	);
};
