const data =
{
    "imageBoxes": [
        {
            "title": "Results",
            "elements": [
                {
                    "title": "Baseline",
                    "version": "-",
                    "image": "images/living_path.png"
                },
                {
                    "title": "PPG",
                    "version": "-",
                    "image": "images/living_PPG_unif.png"
                },
                {
                    "title": "PPG + Ours",
                    "version": "-",
                    "image": "images/living_PPG_ours.png"
                },
                {
                    "title": "EARS",
                    "version": "-",
                    "image": "images/living_EARS.png"
                },
                {
                    "title": "EARS + Ours",
                    "version": "-",
                    "image": "images/living_EARS_ours.png"
                },
                {
                    "title": "Reference",
                    "version": "-",
                    "image": "images/gt.png"
                }
            ]
        },
    ],
    "stats_short": [
        {
            "title": "Results",
            "labels": [
                "Baseline",
                "PPG",
                "PPG + Ours",
                "EARS",
                "EARS + Ours"],
            "series": [
                {
                    "label": "samples per pixel",
                    "data": [
                        "3632",
                        "1692",
                        "7256 (74% skipped)",
                        "352",
                        "984 (62% skipped)"
                    ]
                },
                {
                    "label": "Time (min)",
                    "data": [
                        "19.35",
                        "19.35",
                        "19.52",
                        "19.42",
                        "19.04"
                    ]
                },
				{
                    "label": "MSE (×10⁻³) / relMSE",
                    "data": [
                        "10.5246 / 0.183179",
                        "2.7875 / 0.007079",
                        "0.3412 / 0.002870",
                        "3.8242 / 0.005862",
                        "1.0355 / 0.002953"
                    ]
                },
                {
                    "label": "Relative efficiency",
                    "data": [
                        "×1.0 / ×1.0",
                        "×3.78 / ×25.87",
                        "×30.57 / ×63.25",
                        "×2.74 / ×31.13",
                        "×10.33 / ×63.03"
                    ]
                }
            ]
        }
    ]
}