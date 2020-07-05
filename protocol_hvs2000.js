module.exports = {
	HVS2000: {
		COMMANDS: {
			GET_INPUTS: "GET.SIGNALS_INFO",
			GET_STATE: "GET.PNL_ALLDATA",
			REBOOT: "CMD.020103",
			// event: 2-digit hex for the selected event
			//RECALL_EVENT: "CMD.030502{event}",
			// me: which me to transition
			TRANS_ME_AUTO: "SET.M{me}BG_TRANSITION:AUTO",
			// me: which me to transition
			TRANS_ME_CUT: "SET.M{me}BG_TRANSITION:CUT",
			// me: which me to set
			// layer: which layer to set
			// source: id of the selected source
			XPT_ME: "SET.M{me}BG_XPT_{layer}:{source}",
			// aux: which aux to set
			// source: id of the selected source
			XPT_AUX: "SET.AUX{aux}_XPT:{source}",
			// mel: which mel to transition
			TRANS_MEL_AUTO: "SET.MEL{mel}_TRANSITION:AUTO",
			// mel: which mel to transition
			TRANS_MEL_CUT: "SET.MEL{mel}_TRANSITION:CUT",
			// mel: which mel to set
			// layer: which layer to set
			// source: id of the selected source
			XPT_MEL: "SET.MEL{mel}BG_XPT_{layer}:{source}",
		},
		ME_LAYERS: { A: "PGM", B: "PST" },
		AUXES: [
			{ id: 1, label: "Aux 1" },
			{ id: 2, label: "Aux 2" },
			{ id: 3, label: "Aux 3" },
			{ id: 4, label: "Aux 4" },
			{ id: 5, label: "Aux 5" },
			{ id: 6, label: "Aux 6" },
			{ id: 7, label: "Aux 7" },
			{ id: 8, label: "Aux 8" },
			{ id: 9, label: "Aux 9" },
			{ id: 10, label: "Aux 10" },
			{ id: 11, label: "Aux 11" },
			{ id: 12, label: "Aux 12" },
			{ id: 13, label: "Aux 13" },
			{ id: 14, label: "Aux 14" },
			{ id: 15, label: "Aux 15" },
			{ id: 16, label: "Aux 16" },
			{ id: 17, label: "Aux 17" },
			{ id: 18, label: "Aux 18" },
		],
		MES: [
			{ id: 1, label: "ME 1" },
			{ id: 2, label: "ME 2" },
			{ id: 3, label: "ME 3" },
		],
		MELS: [
			{ id: 1, label: "MELite 1" },
			{ id: 2, label: "MELite 2" },
			{ id: 3, label: "MELite 3" },
			{ id: 4, label: "MELite 4" },
			{ id: 5, label: "MELite 5" },
			{ id: 6, label: "MELite 6" },
		],
		get SOURCES_ME() {
			let sources = [
				// Built-in Inputs
				{ id: 1, label: "Source 1" },
				{ id: 2, label: "Source 2" },
				{ id: 3, label: "Source 3" },
				{ id: 4, label: "Source 4" },
				{ id: 5, label: "Source 5" },
				{ id: 6, label: "Source 6" },
				{ id: 7, label: "Source 7" },
				{ id: 8, label: "Source 8" },
				{ id: 9, label: "Source 9" },
				{ id: 10, label: "Source 10" },
				{ id: 11, label: "Source 11" },
				{ id: 12, label: "Source 12" },
				{ id: 13, label: "Source 13" },
				{ id: 14, label: "Source 14" },
				{ id: 15, label: "Source 15" },
				{ id: 16, label: "Source 16" },
				{ id: 17, label: "Source 17" },
				{ id: 18, label: "Source 18" },
				{ id: 19, label: "Source 19" },
				{ id: 20, label: "Source 20" },
				{ id: 21, label: "Source 21" },
				{ id: 22, label: "Source 22" },
				{ id: 23, label: "Source 23" },
				{ id: 24, label: "Source 24" },
				// Optional expansion card inputs
				{ id: 25, label: "Source 25" },
				{ id: 26, label: "Source 26" },
				{ id: 27, label: "Source 27" },
				{ id: 28, label: "Source 28" },
				{ id: 29, label: "Source 29" },
				{ id: 30, label: "Source 30" },
				{ id: 31, label: "Source 31" },
				{ id: 32, label: "Source 32" },
				{ id: 33, label: "Source 33" },
				{ id: 34, label: "Source 34" },
				{ id: 35, label: "Source 35" },
				{ id: 36, label: "Source 36" },
				{ id: 37, label: "Source 37" },
				{ id: 38, label: "Source 38" },
				{ id: 39, label: "Source 39" },
				{ id: 40, label: "Source 40" },
				{ id: 41, label: "Source 41" },
				{ id: 42, label: "Source 42" },
				{ id: 43, label: "Source 43" },
				{ id: 44, label: "Source 44" },
				{ id: 45, label: "Source 45" },
				{ id: 46, label: "Source 46" },
				{ id: 47, label: "Source 47" },
				{ id: 48, label: "Source 48" },
			];
			let system = [
				// System inputs
				{ id: 0, label: "Black" },
				{ id: 49, label: "Still 1" },
				{ id: 50, label: "Still 2" },
				{ id: 51, label: "Still 3" },
				{ id: 52, label: "Still 4" },
				{ id: 53, label: "Still 5" },
				{ id: 54, label: "Still 6" },
				{ id: 61, label: "Color Bars" },
				{ id: 62, label: "White" },
				{ id: 63, label: "Matte 1" },
				{ id: 64, label: "Matte 2" },
				{ id: 65, label: "Grand Matte" },

				{ id: 108, label: "Chroma Key 1 Fill" },
				{ id: 109, label: "Chroma Key 1 Key" },
				{ id: 110, label: "Chroma Key 2 Fill" },
				{ id: 111, label: "Chroma Key 2 Key" },
				{ id: 112, label: "Chroma Key 3 Fill" },
				{ id: 113, label: "Chroma Key 3 Key" },
				{ id: 114, label: "Chroma Key 4 Fill" },
				{ id: 115, label: "Chroma Key 4 Key" },
				{ id: 116, label: "Chroma Key 5 Fill" },
				{ id: 117, label: "Chroma Key 5 Key" },
				{ id: 118, label: "Chroma Key 6 Fill" },
				{ id: 119, label: "Chroma Key 6 Key" },
				{ id: 120, label: "Chroma Key 7 Fill" },
				{ id: 121, label: "Chroma Key 7 Key" },
				{ id: 122, label: "Chroma Key 8 Fill" },
				{ id: 123, label: "Chroma Key 8 Key" },
				{ id: 124, label: "Effect 1" },
				{ id: 125, label: "Effect 2" },
				{ id: 126, label: "Effect 3" },
				{ id: 127, label: "Effect 4" },

				{ id: 130, label: "Color Correct 1" },
				{ id: 131, label: "Color Correct 2" },
				{ id: 132, label: "Color Correct 3" },
				{ id: 133, label: "Color Correct 4" },
				{ id: 134, label: "Color Correct 5" },
				{ id: 135, label: "Color Correct 6" },
				{ id: 136, label: "Color Correct 7" },
				{ id: 137, label: "Color Correct 8" },

				{ id: 169, label: "Still 1 Key" },
				{ id: 170, label: "Still 2 Key" },
				{ id: 171, label: "Still 3 Key" },
				{ id: 172, label: "Still 4 Key" },
				{ id: 173, label: "Still 5 Key" },
				{ id: 174, label: "Still 6 Key" },
			];
			return sources.concat(
				system.sort((a, b) => (a.label > b.label ? 1 : -1))
			);
		},
		get SOURCES_AUX() {
			let additional = [
				{ id: 72, label: "ME1" },
				{ id: 73, label: "ME1 Out 1" },
				{ id: 74, label: "ME1 Out 2" },
				{ id: 75, label: "ME2" },
				{ id: 76, label: "ME2 Out 1" },
				{ id: 77, label: "ME2 Out 2" },

				{ id: 80, label: "MV1 Out A" },
				{ id: 81, label: "MV2 Out A" },

				{ id: 84, label: "ME3" },
				{ id: 85, label: "ME3 Out 1" },
				{ id: 86, label: "ME3 Out 2" },

				{ id: 95, label: "MV3 Out A" },
				{ id: 96, label: "MV4 Out A" },

				{ id: 105, label: "ME1 Out 3" },
				{ id: 106, label: "ME2 Out 3" },
				{ id: 107, label: "ME3 Out 3" },

				{ id: 175, label: "MV1 Out B" },
				{ id: 176, label: "MV2 Out B" },
				{ id: 177, label: "MV3 Out B" },
				{ id: 178, label: "MV4 Out B" },
			];
			return this.SOURCES_ME.concat(
				additional.sort((a, b) => (a.label > b.label ? 1 : -1))
			);
		},
	},
};
