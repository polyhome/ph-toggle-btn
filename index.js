import {
	css,
	html,
	LitElement
} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

class ToggleBtn extends LitElement {
	firstUpdated() {
		this.actions = {
			toggle: {
				command: this.card.commands.find(c => c.trigger === 'toggle')._id,
				card: this.card._id,
				state: {
					toggled: 'toggle'
				}
			}
		};
	}

	static get styles() {
		return css`
			.container {
				height: 100%;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			input[type='checkbox'] {
				height: 0;
				width: 0;
				visibility: hidden;
			}

			label {
				cursor: pointer;
				text-indent: -9999px;
				width: 50px;
				height: 25px;
				background: #333;
				display: block;
				border-radius: 100px;
				position: relative;
				left: -0.55em;
			}

			label:after {
				content: '';
				position: absolute;
				top: 10%;
				left: 10%;
				width: 20px;
				height: 20px;
				background: #fff;
				border-radius: 90px;
				transition: 0.3s;
			}

			input:checked + label {
				background-color: #989898;
			}

			input:checked + label:after {
				left: calc(100% - 10%);
				transform: translateX(-100%);
			}

			label:active:after {
				width: 30px;
			}
		`;
	}

	render() {
		return html`
			<div class="container">
				<input
					type="checkbox"
					id="switch"
					@click=${() => this.exec(this.actions.toggle)}
					?checked=${this.card.state.toggled}
				/>
				<label for="switch">Toggle</label>
			</div>
		`;
	}
}

customElements.define("ph-toggle-btn", ToggleBtn);
