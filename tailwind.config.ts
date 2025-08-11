import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Shadcn/UI Core Colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				
				// Custom Greyscale Palette for InvestDAO
				'grey': {
					50: 'hsl(0 0% 98%)',   // Almost white
					100: 'hsl(0 0% 96%)',  // Very light grey
					200: 'hsl(0 0% 90%)',  // Light grey
					300: 'hsl(0 0% 82%)',  // Medium-light grey
					400: 'hsl(0 0% 61%)',  // Medium grey
					500: 'hsl(0 0% 42%)',  // Medium-dark grey
					600: 'hsl(0 0% 28%)',  // Dark grey
					700: 'hsl(0 0% 22%)',  // Very dark grey
					800: 'hsl(0 0% 16%)',  // Near black
					900: 'hsl(0 0% 10%)',  // Almost black
					950: 'hsl(0 0% 3%)',   // Pure black
				},

				// Status Colors (Greyscale)
				status: {
					open: 'hsl(var(--status-open))',
					funded: 'hsl(var(--status-funded))',
					rejected: 'hsl(var(--status-rejected))',
				}
			},
			backgroundImage: {
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-dark': 'var(--gradient-dark)',
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'medium': 'var(--shadow-medium)',
				'large': 'var(--shadow-large)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
