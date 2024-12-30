
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #ED422E 
		"--color-primary-50": "252 227 224", // #fce3e0
		"--color-primary-100": "251 217 213", // #fbd9d5
		"--color-primary-200": "251 208 203", // #fbd0cb
		"--color-primary-300": "248 179 171", // #f8b3ab
		"--color-primary-400": "242 123 109", // #f27b6d
		"--color-primary-500": "237 66 46", // #ED422E
		"--color-primary-600": "213 59 41", // #d53b29
		"--color-primary-700": "178 50 35", // #b23223
		"--color-primary-800": "142 40 28", // #8e281c
		"--color-primary-900": "116 32 23", // #742017
		// secondary | #1b76bc 
		"--color-secondary-50": "221 234 245", // #ddeaf5
		"--color-secondary-100": "209 228 242", // #d1e4f2
		"--color-secondary-200": "198 221 238", // #c6ddee
		"--color-secondary-300": "164 200 228", // #a4c8e4
		"--color-secondary-400": "95 159 208", // #5f9fd0
		"--color-secondary-500": "27 118 188", // #1b76bc
		"--color-secondary-600": "24 106 169", // #186aa9
		"--color-secondary-700": "20 89 141", // #14598d
		"--color-secondary-800": "16 71 113", // #104771
		"--color-secondary-900": "13 58 92", // #0d3a5c
		// tertiary | #5FA5E0 
		"--color-tertiary-50": "231 242 250", // #e7f2fa
		"--color-tertiary-100": "223 237 249", // #dfedf9
		"--color-tertiary-200": "215 233 247", // #d7e9f7
		"--color-tertiary-300": "191 219 243", // #bfdbf3
		"--color-tertiary-400": "143 192 233", // #8fc0e9
		"--color-tertiary-500": "95 165 224", // #5FA5E0
		"--color-tertiary-600": "86 149 202", // #5695ca
		"--color-tertiary-700": "71 124 168", // #477ca8
		"--color-tertiary-800": "57 99 134", // #396386
		"--color-tertiary-900": "47 81 110", // #2f516e
		// success | #50e274 
		"--color-success-50": "229 251 234", // #e5fbea
		"--color-success-100": "220 249 227", // #dcf9e3
		"--color-success-200": "211 248 220", // #d3f8dc
		"--color-success-300": "185 243 199", // #b9f3c7
		"--color-success-400": "133 235 158", // #85eb9e
		"--color-success-500": "80 226 116", // #50e274
		"--color-success-600": "72 203 104", // #48cb68
		"--color-success-700": "60 170 87", // #3caa57
		"--color-success-800": "48 136 70", // #308846
		"--color-success-900": "39 111 57", // #276f39
		// warning | #ffc800 
		"--color-warning-50": "255 247 217", // #fff7d9
		"--color-warning-100": "255 244 204", // #fff4cc
		"--color-warning-200": "255 241 191", // #fff1bf
		"--color-warning-300": "255 233 153", // #ffe999
		"--color-warning-400": "255 217 77", // #ffd94d
		"--color-warning-500": "255 200 0", // #ffc800
		"--color-warning-600": "230 180 0", // #e6b400
		"--color-warning-700": "191 150 0", // #bf9600
		"--color-warning-800": "153 120 0", // #997800
		"--color-warning-900": "125 98 0", // #7d6200
		// error | #ff0000 
		"--color-error-50": "255 217 217", // #ffd9d9
		"--color-error-100": "255 204 204", // #ffcccc
		"--color-error-200": "255 191 191", // #ffbfbf
		"--color-error-300": "255 153 153", // #ff9999
		"--color-error-400": "255 77 77", // #ff4d4d
		"--color-error-500": "255 0 0", // #ff0000
		"--color-error-600": "230 0 0", // #e60000
		"--color-error-700": "191 0 0", // #bf0000
		"--color-error-800": "153 0 0", // #990000
		"--color-error-900": "125 0 0", // #7d0000
		// surface | #5FA5E0 
		"--color-surface-50": "231 242 250", // #e7f2fa
		"--color-surface-100": "223 237 249", // #dfedf9
		"--color-surface-200": "215 233 247", // #d7e9f7
		"--color-surface-300": "191 219 243", // #bfdbf3
		"--color-surface-400": "143 192 233", // #8fc0e9
		"--color-surface-500": "95 165 224", // #5FA5E0
		"--color-surface-600": "86 149 202", // #5695ca
		"--color-surface-700": "71 124 168", // #477ca8
		"--color-surface-800": "57 99 134", // #396386
		"--color-surface-900": "47 81 110", // #2f516e
		
	}
}