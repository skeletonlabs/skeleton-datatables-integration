import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #CC1960
		'--color-primary-50': '247 221 231', // #f7dde7
		'--color-primary-100': '245 209 223', // #f5d1df
		'--color-primary-200': '242 198 215', // #f2c6d7
		'--color-primary-300': '235 163 191', // #eba3bf
		'--color-primary-400': '219 94 144', // #db5e90
		'--color-primary-500': '204 25 96', // #CC1960
		'--color-primary-600': '184 23 86', // #b81756
		'--color-primary-700': '153 19 72', // #991348
		'--color-primary-800': '122 15 58', // #7a0f3a
		'--color-primary-900': '100 12 47', // #640c2f
		// secondary | #006990
		'--color-secondary-50': '217 233 238', // #d9e9ee
		'--color-secondary-100': '204 225 233', // #cce1e9
		'--color-secondary-200': '191 218 227', // #bfdae3
		'--color-secondary-300': '153 195 211', // #99c3d3
		'--color-secondary-400': '77 150 177', // #4d96b1
		'--color-secondary-500': '0 105 144', // #006990
		'--color-secondary-600': '0 95 130', // #005f82
		'--color-secondary-700': '0 79 108', // #004f6c
		'--color-secondary-800': '0 63 86', // #003f56
		'--color-secondary-900': '0 51 71', // #003347
		// tertiary | #0FBA81
		'--color-tertiary-50': '219 245 236', // #dbf5ec
		'--color-tertiary-100': '207 241 230', // #cff1e6
		'--color-tertiary-200': '195 238 224', // #c3eee0
		'--color-tertiary-300': '159 227 205', // #9fe3cd
		'--color-tertiary-400': '87 207 167', // #57cfa7
		'--color-tertiary-500': '15 186 129', // #0FBA81
		'--color-tertiary-600': '14 167 116', // #0ea774
		'--color-tertiary-700': '11 140 97', // #0b8c61
		'--color-tertiary-800': '9 112 77', // #09704d
		'--color-tertiary-900': '7 91 63', // #075b3f
		// success | #21cb15
		'--color-success-50': '222 247 220', // #def7dc
		'--color-success-100': '211 245 208', // #d3f5d0
		'--color-success-200': '200 242 197', // #c8f2c5
		'--color-success-300': '166 234 161', // #a6eaa1
		'--color-success-400': '100 219 91', // #64db5b
		'--color-success-500': '33 203 21', // #21cb15
		'--color-success-600': '30 183 19', // #1eb713
		'--color-success-700': '25 152 16', // #199810
		'--color-success-800': '20 122 13', // #147a0d
		'--color-success-900': '16 99 10', // #10630a
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #d21414
		'--color-error-50': '248 220 220', // #f8dcdc
		'--color-error-100': '246 208 208', // #f6d0d0
		'--color-error-200': '244 196 196', // #f4c4c4
		'--color-error-300': '237 161 161', // #eda1a1
		'--color-error-400': '224 91 91', // #e05b5b
		'--color-error-500': '210 20 20', // #d21414
		'--color-error-600': '189 18 18', // #bd1212
		'--color-error-700': '158 15 15', // #9e0f0f
		'--color-error-800': '126 12 12', // #7e0c0c
		'--color-error-900': '103 10 10', // #670a0a
		// surface | #636779
		'--color-surface-50': '232 232 235', // #e8e8eb
		'--color-surface-100': '224 225 228', // #e0e1e4
		'--color-surface-200': '216 217 222', // #d8d9de
		'--color-surface-300': '193 194 201', // #c1c2c9
		'--color-surface-400': '146 149 161', // #9295a1
		'--color-surface-500': '99 103 121', // #636779
		'--color-surface-600': '89 93 109', // #595d6d
		'--color-surface-700': '74 77 91', // #4a4d5b
		'--color-surface-800': '59 62 73', // #3b3e49
		'--color-surface-900': '49 50 59' // #31323b
	}
};
