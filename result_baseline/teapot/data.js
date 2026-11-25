const data =
{
    "imageBoxes": [
        {
            "title": "Results",
            "elements": [
                {
                    "title": "Baseline (equal-time)",
                    "version": "-",
                    "image": "images/teapot_path_20sec.png"
                },
                {
                    "title": "Ours",
                    "version": "-",
                    "image": "images/teapot_ours_20sec.png"
                },
                {
                    "title": "Baseline (equal-sample)",
                    "version": "-",
                    "image": "images/teapot_pt_708spp.png"
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
            "title": "Results (192 spp)",
            "labels": [
                "Baseline (equal-time)",
                "Ours",
                "Baseline (equal-sample)"],
            "series": [
                {
                    "label": "samples per pixel",
                    "data": [
                        "208",
                        "708 (74% skipped)",
                        "708"
                    ]
                },
                {
                    "label": "Time (min)",
                    "data": [
                        "0.337",
                        "0.360",
                        "1.128"
                    ]
                },
				{
                    "label": "MSE (×10⁻³)",
                    "data": [
                        "2.0693",
                        "0.2797",
                        "0.6246"
                    ]
                },
                {
                    "label": "Relative efficiency",
                    "data": [
                        "×1.0",
                        "×6.93",
                        "-"
                    ]
                }
            ]
        }
    ]
}