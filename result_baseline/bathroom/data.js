const data =
{
    "imageBoxes": [
        {
            "title": "Results",
            "elements": [
                {
                    "title": "Baseline (equal-time)",
                    "version": "-",
                    "image": "images/bathroom2_path_640sec.png"
                },
                {
                    "title": "Ours",
                    "version": "-",
                    "image": "images/bathroom2_ours_640sec.png"
                },
                {
                    "title": "Baseline (equal-sample)",
                    "version": "-",
                    "image": "images/bathroom2_pt_4837spp.png"
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
                "Baseline (equal-time)",
                "Ours",
                "Baseline (equal-sample)"],
            "series": [
                {
                    "label": "samples per pixel",
                    "data": [
                        "1856",
                        "4837 (62% skipped)",
                        "4837"
                    ]
                },
                {
                    "label": "Time (min)",
                    "data": [
                        "10.683",
                        "10.616",
                        "27.708"
                    ]
                },
				{
                    "label": "MSE (×10⁻³)",
                    "data": [
                        "2.4325",
                        "0.8927",
                        "0.9665"
                    ]
                },
                {
                    "label": "Relative efficiency",
                    "data": [
                        "×1.0",
                        "×2.74",
                        "-"
                    ]
                }
            ]
        }
    ]
}