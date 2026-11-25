const data =
{
    "imageBoxes": [
        {
            "title": "Results",
            "elements": [
                {
                    "title": "Baseline",
                    "version": "-",
                    "image": "images/veach-ajar_path.png"
                },
                {
                    "title": "PPG",
                    "version": "-",
                    "image": "images/veach-ajar_PPG_unif.png"
                },
                {
                    "title": "PPG + Ours",
                    "version": "-",
                    "image": "images/veach-ajar_PPG_ours.png"
                },
                {
                    "title": "EARS",
                    "version": "-",
                    "image": "images/veach-ajar_EARS.png"
                },
                {
                    "title": "EARS + Ours",
                    "version": "-",
                    "image": "images/veach-ajar_EARS_ours.png"
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
                        "3920",
                        "1264",
                        "2730 (50% skipped)",
                        "197",
                        "302 (40% skipped)"
                    ]
                },
                {
                    "label": "Time (min)",
                    "data": [
                        "12.50",
                        "12.54",
                        "12.73",
                        "12.42",
                        "11.98"
                    ]
                },
				{
                    "label": "MSE (×10⁻²) / relMSE",
                    "data": [
                        "1.2297 / 0.025952",
                        "0.8914 / 0.009128",
                        "0.2637 / 0.004035",
                        "0.8687 / 0.006727",
                        "0.3263 / 0.003862"
                    ]
                },
                {
                    "label": "Relative efficiency",
                    "data": [
                        "×1.0 / ×1.0",
                        "×1.37 / ×2.83",
                        "×4.58 / ×6.31",
                        "×1.42 / ×3.88",
                        "×3.93 / ×7.01"
                    ]
                }
            ]
        }
    ]
}