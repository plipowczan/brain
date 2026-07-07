---
title: "maziyarpanahi/openmed: Local-first healthcare AI: clinical NER & HIPAA PII de-identification that runs 100% on-device. 1,000+ medical models, 12 languages, Apple MLX + Python, no cloud, no patient data leaving your network. Apache-2.0"
source: "https://github.com/maziyarpanahi/openmed"
author:
published:
created: 2026-07-07
description: "Local-first healthcare AI: clinical NER & HIPAA PII de-identification that runs 100% on-device. 1,000+ medical models, 12 languages, Apple MLX + Python, no cloud, no patient data leaving your network. Apache-2.0 - maziyarpanahi/openmed"
tags:
  - "clippings"
---
[![[546a5b0ec2cdc9ac727401cf092e9225_MD5.png]]](https://github.com/maziyarpanahi/openmed/blob/master/docs/brand/openmed-mascot-lockup.png)

## Local-first healthcare AI that never leaves the device

[![[0338afb7c2ac910d795d767faff93020_MD5.svg]]](https://trendshift.io/repositories/40195?utm_source=repository-badge&utm_medium=badge&utm_campaign=badge-repository-40195)

**Turn clinical text into structured insight with one line of code.**  
Entity extraction, PII de-identification, and 1,000+ specialized medical models that run entirely on your own hardware — from a one-liner in Python to native Swift apps, REST services, and browser token classification through Transformers.js/WebGPU. No cloud. No vendor lock-in. No patient data leaving your network.

**1,000+ models** · **15 languages** · **247 PII checkpoints** · **100% on-device** · **Apache-2.0**

**English** · [简体中文](https://github.com/maziyarpanahi/openmed/blob/master/README.zh-CN.md) · [Español](https://github.com/maziyarpanahi/openmed/blob/master/README.es.md) · [Français](https://github.com/maziyarpanahi/openmed/blob/master/README.fr.md) · [Deutsch](https://github.com/maziyarpanahi/openmed/blob/master/README.de.md) · [Italiano](https://github.com/maziyarpanahi/openmed/blob/master/README.it.md) · [Português](https://github.com/maziyarpanahi/openmed/blob/master/README.pt.md) · [Nederlands](https://github.com/maziyarpanahi/openmed/blob/master/README.nl.md) · [العربية](https://github.com/maziyarpanahi/openmed/blob/master/README.ar.md) · [हिन्दी](https://github.com/maziyarpanahi/openmed/blob/master/README.hi.md) · [తెలుగు](https://github.com/maziyarpanahi/openmed/blob/master/README.te.md) · [日本語](https://github.com/maziyarpanahi/openmed/blob/master/README.ja.md) · [Türkçe](https://github.com/maziyarpanahi/openmed/blob/master/README.tr.md) · [فارسی](https://github.com/maziyarpanahi/openmed/blob/master/README.fa.md)

---

## See it in action

OpenMed runs **entirely on the device** — clinical text never leaves it. Here it is on iPhone, fully offline:

[![[afef13ce8a00433b0f592e6842f331f5_MD5.png]]](https://github.com/maziyarpanahi/openmed/blob/master/docs/brand/openmed-ios-scan.png)  
<sub><b>On iPhone via <a href="https://github.com/maziyarpanahi/openmed/blob/master/swift/OpenMedKit">OpenMedKit</a></b> — scan a clinical note, de-identify it, and extract clinical signals, all locally with Apple MLX. Nothing is uploaded.</sub>

[![[6bde58f1688aef00dc5737e3797d0d29_MD5.gif]]](https://github.com/maziyarpanahi/openmed/blob/master/docs/brand/openmed-pii-demo.gif)

  
<sub><b>Real-time PII de-identification</b> — the Nemotron Privacy Filter redacting names, addresses, IDs, and billing data from a clinical discharge packet, entirely on-device. <i>(All values shown are synthetic.)</i></sub>

---

## 30-second example

```
from openmed import analyze_text

result = analyze_text(
    "Patient started on imatinib for chronic myeloid leukemia.",
    model_name="disease_detection_superclinical",
)

for entity in result.entities:
    print(f"{entity.label:<12} {entity.text:<28} {entity.confidence:.2f}")
# DISEASE      chronic myeloid leukemia     0.98
# DRUG         imatinib                     0.95
```

A state-of-the-art clinical NER model running locally — no API key, no network call.

---

## Why OpenMed?

|  | **OpenMed** | Cloud medical APIs |
| --- | --- | --- |
| Runs on your device / servers | ✅ | ❌ |
| Patient data leaves your network | **Never** | Sent to the vendor |
| Cost | Free & open-source | Per-call pricing |
| Specialized medical models | 1,000+ | Limited |
| Languages | 15 | Varies |
| Offline / air-gapped | ✅ | ❌ |
| Apple Silicon (MLX) acceleration | ✅ | n/a |
| Native iOS / macOS apps | ✅ via OpenMedKit | ❌ |
| Browser/WebGPU token classification | ✅ via Transformers.js | Varies |
| Vendor lock-in | None — Apache-2.0 | Yes |

- **Specialized models** — 1,000+ curated biomedical & clinical models, many outperforming proprietary stacks.
- **HIPAA-aware de-identification** — all 18 Safe Harbor identifiers, smart entity merging, format-preserving fakes.
- **Runs everywhere** — CPU, CUDA, Apple Silicon (MLX), iOS/macOS via OpenMedKit, REST services, and browser/WebGPU bundles via Transformers.js.
- **One-line deployment** — Python API, Dockerized REST service, or batch pipelines.
- **Zero lock-in** — Apache-2.0, your infrastructure, your data.

---

## On-device on Apple — Swift, MLX & iOS

OpenMed is built to run where your data already lives. On Apple hardware it accelerates with **MLX**, and it ships straight into iPhone, iPad, and Mac apps through **[OpenMedKit](https://github.com/maziyarpanahi/openmed/blob/master/swift/OpenMedKit)** — so PII detection and clinical extraction happen fully offline, on the device.

```
// Add OpenMedKit to your app
dependencies: [
    .package(url: "https://github.com/maziyarpanahi/openmed.git", from: "1.7.0"),
]
```
- **MLX runtime** for PII token classification, the Privacy Filter family, experimental GLiNER-family zero-shot tasks, and Python MLX-LM text generation with Laneformer; includes a CoreML fallback path for supported token-classification artifacts.
- **One model name, every platform** — MLX model names automatically fall back to the matching PyTorch checkpoint on non-Apple hardware.
- **Python on Apple Silicon** too: `pip install "openmed[mlx]"`.

Guides: [MLX backend](https://github.com/maziyarpanahi/openmed/blob/master/docs/mlx-backend.md) · [OpenMedKit (Swift)](https://github.com/maziyarpanahi/openmed/blob/master/docs/swift-openmedkit.md) · [CoreML export](https://github.com/maziyarpanahi/openmed/blob/master/docs/coreml-export.md)

[![[020cd4919fba3ff635a6b1594909604b_MD5.png]]](https://github.com/maziyarpanahi/openmed/blob/master/docs/brand/openmed-mlx-speedup.png)  
<sub><b>MLX on Apple Silicon: 24–33× faster than CPU PyTorch</b> for the Privacy Filter — median latency per inference step, lower is better.</sub>

---

## How it works

```
flowchart LR
    A["Clinical text"] --> B["OpenMed<br/>(100% on-device)"]
    B --> C["Medical entities"]
    B --> D["PII detected"]
    B --> E["De-identified text"]
    style B fill:#0D6E6E,stroke:#0A5656,stroke-width:2px,color:#ffffff
    style C fill:#D6EBEB,stroke:#0D6E6E,color:#0E1116
    style D fill:#F7DCD8,stroke:#C5453A,color:#0E1116
    style E fill:#F5E27A,stroke:#A9A088,color:#0E1116
```

---

## Quick start

```
# Core + Hugging Face runtime (Linux, macOS, Windows; CPU or CUDA)
pip install "openmed[hf]"

# Add the REST service
pip install "openmed[hf,service]"

# Apple Silicon acceleration (MLX)
pip install "openmed[mlx]"
```

| **Python API**  ``` from openmed import analyze_text  analyze_text(   "Patient received 75mg "   "clopidogrel for NSTEMI.",   model_name=   "pharma_detection_superclinical", ) ``` | **REST service**  ``` uvicorn openmed.service.app:app \   --host 0.0.0.0 --port 8080 ```  `GET /health` `POST /analyze` `POST /pii/extract` `POST /pii/deidentify` | **Batch**  ``` from openmed import BatchProcessor  p = BatchProcessor(   model_name=   "disease_detection_superclinical",   group_entities=True, ) p.process_texts([...]) ``` |
| --- | --- | --- |

**Browser / WebGPU**

Package ONNX token-classification exports for in-browser inference through Transformers.js:

```
python -m openmed.onnx.convert \
  --model OpenMed/example-token-classifier \
  --output dist/example-onnx \
  --include-transformersjs
```
```
import { pipeline } from "@huggingface/transformers";

const detector = await pipeline(
  "token-classification",
  "/models/openmed-pii/transformersjs",
  { device: "webgpu" },
);
const entities = await detector("Patient Casey Example called 212-555-0198.");
```

[Transformers.js export guide](https://github.com/maziyarpanahi/openmed/blob/master/docs/export-transformersjs.md)

**Offline / air-gapped?** Point `model_name` (or `model_id`) at a local directory and OpenMed loads it without contacting the Hugging Face Hub:

```
from openmed import OpenMedConfig, analyze_text

result = analyze_text(
    "Patient presents with chronic myeloid leukemia and Type 2 diabetes.",
    model_id="./models/OpenMed-NER-DiseaseDetect-SuperClinical-434M",
    config=OpenMedConfig(device="cpu"),
)
```

---

## Models

A curated registry of specialized medical NER models — browse the [full catalog](https://openmed.life/docs/model-registry).

| Model | Specialization | Entity types | Size |
| --- | --- | --- | --- |
| `disease_detection_superclinical` | Disease & conditions | DISEASE, CONDITION, DIAGNOSIS | 434M |
| `pharma_detection_superclinical` | Drugs & medications | DRUG, MEDICATION, TREATMENT | 434M |
| `pii_superclinical_large` | PII & de-identification | NAME, DATE, SSN, PHONE, EMAIL, ADDRESS | 434M |
| `anatomy_detection_electramed` | Anatomy & body parts | ANATOMY, ORGAN, BODY\_PART | 109M |
| `gene_detection_genecorpus` | Genes & proteins | GENE, PROTEIN | 109M |

---

```
from openmed import extract_pii, deidentify

text = "Patient: John Doe, DOB: 01/15/1970, SSN: 123-45-6789"

# Extract PII with smart merging (prevents tokenization fragmentation)
result = extract_pii(text, model_name="pii_superclinical_large", use_smart_merging=True)

# De-identify with the method you need
deidentify(text, method="mask")     # [NAME], [DATE]
deidentify(text, method="replace")  # Faker-backed, locale-aware, format-preserving fakes
deidentify(text, method="hash")     # Cryptographic hashing
deidentify(text, method="shift_dates", date_shift_days=180)
```
- **Smart entity merging** keeps `01/15/1970` whole instead of fragmenting it.
- **Policy-aware pipelines** add HIPAA/GDPR/research profiles, calibrated thresholds, signed audit reports, redaction previews, and minimum-necessary action selection.
- **Faker-backed obfuscation** with custom clinical-ID providers (CPF, CNPJ, BSN, NIR, Codice Fiscale, NIE, Aadhaar, Steuer-ID, NPI).
- **HIPAA**: all 18 Safe Harbor identifiers, configurable confidence thresholds.
- **Batch and streaming PII**: extract or de-identify across many documents with `BatchProcessor(operation="extract_pii" | "deidentify", batch_size=16)` or incremental streaming helpers.

[![[eb892ac4fa81367acdd59b5b199d089d_MD5.png]]](https://github.com/maziyarpanahi/openmed/blob/master/docs/assets/pii-batch-benchmark.png)  
<sub><b>Batch processing</b> — up to <b>3.3×</b> higher throughput on CPU and <b>2.2×</b> on MLX vs. one document at a time.</sub>

[Complete PII notebook](https://github.com/maziyarpanahi/openmed/blob/master/examples/notebooks/PII_Detection_Complete_Guide.ipynb) · [Smart merging](https://github.com/maziyarpanahi/openmed/blob/master/docs/pii-smart-merging.md) · [Anonymization quickstart](https://github.com/maziyarpanahi/openmed/blob/master/docs/anonymization.md#quickstart-choosing-a-method)

**Privacy Filter family** — three model families on the OpenAI Privacy Filter architecture

Same model code (gpt-oss-style sparse-MoE transformer with local attention, sink tokens, RoPE+YaRN, tiktoken `o200k_base`), different training data. All route through the **same** `extract_pii()` / `deidentify()` API — only `model_name=` changes.

| Variant | PyTorch (CPU + CUDA) | MLX (Apple Silicon) | MLX 8-bit |
| --- | --- | --- | --- |
| **OpenAI Privacy Filter** | [`openai/privacy-filter`](https://huggingface.co/openai/privacy-filter) | [`OpenMed/privacy-filter-mlx`](https://huggingface.co/OpenMed/privacy-filter-mlx) | [`…-mlx-8bit`](https://huggingface.co/OpenMed/privacy-filter-mlx-8bit) |
| **Nemotron-PII fine-tune** | [`OpenMed/privacy-filter-nemotron`](https://huggingface.co/OpenMed/privacy-filter-nemotron) | [`…-nemotron-mlx`](https://huggingface.co/OpenMed/privacy-filter-nemotron-mlx) | [`…-nemotron-mlx-8bit`](https://huggingface.co/OpenMed/privacy-filter-nemotron-mlx-8bit) |
| **OpenMed Multilingual** | [`OpenMed/privacy-filter-multilingual`](https://huggingface.co/OpenMed/privacy-filter-multilingual) | [`…-multilingual-mlx`](https://huggingface.co/OpenMed/privacy-filter-multilingual-mlx) | [`…-multilingual-mlx-8bit`](https://huggingface.co/OpenMed/privacy-filter-multilingual-mlx-8bit) |

```
from openmed import extract_pii

text = "Patient Sarah Connor (DOB: 03/15/1985) at MRN 4471882."

extract_pii(text, model_name="openai/privacy-filter")              # PyTorch baseline
extract_pii(text, model_name="OpenMed/privacy-filter-nemotron")    # same code, different weights
extract_pii(text, model_name="OpenMed/privacy-filter-mlx")         # Apple Silicon (MLX)
```

On non-Apple-Silicon hosts, MLX model names are automatically substituted with the matching PyTorch checkpoint (with a one-time warning) — ship one model name, run anywhere. See [Privacy Filter architecture & backend routing](https://github.com/maziyarpanahi/openmed/blob/master/docs/anonymization.md#privacy-filter-family).

---

## Multilingual PII (15 languages)

Extraction and de-identification support **15 supported PII language codes**: `ar`, `de`, `en`, `es`, `fr`, `he`, `hi`, `id`, `it`, `ja`, `nl`, `pt`, `te`, `th`, and `tr` — **247 PII checkpoints** total.

```
python -c "from openmed import extract_pii; print([(e.label, e.text) for e in extract_pii('Dr. Pedro Almeida, CPF: 123.456.789-09, email: pedro@hospital.pt', lang='pt').entities])"
```
Show per-language examples (Portuguese, Dutch, Hindi, Arabic, Japanese, Turkish)
```
from openmed import extract_pii

portuguese = extract_pii("Paciente: Pedro Almeida, CPF: 123.456.789-09, telefone: +351 912 345 678", lang="pt", use_smart_merging=True)
dutch      = extract_pii("Patiënt: Eva de Vries, BSN: 123456782, telefoon: +31 6 12345678", lang="nl", use_smart_merging=True)
hindi      = extract_pii("रोगी: अनीता शर्मा, फोन: +91 9876543210, पता: नई दिल्ली 110001", lang="hi", use_smart_merging=True)
arabic     = extract_pii("المريضة ليلى حسن، الهاتف +20 10 1234 5678، الرقم القومي 29801011234567.", lang="ar", use_smart_merging=True)
japanese   = extract_pii("患者 佐藤 花子、電話 +81 90 1234 5678、マイナンバー 1234 5678 9012.", lang="ja", use_smart_merging=True)
turkish    = extract_pii("Hasta Ayşe Yılmaz, telefon +90 532 123 45 67, TCKN 10000000146.", lang="tr", use_smart_merging=True)

for r in (portuguese, dutch, hindi, arabic, japanese, turkish):
    print([(e.label, e.text) for e in r.entities])
```

---

## REST API

A Docker-friendly FastAPI service with request validation, shared pipeline preload, and unified error envelopes.

```
pip install "openmed[hf,service]"
uvicorn openmed.service.app:app --host 0.0.0.0 --port 8080

# or with Docker
docker build -t openmed:1.7.0 .
docker run --rm -p 8080:8080 -e OPENMED_PROFILE=prod openmed:1.7.0
```
```
curl -X POST http://127.0.0.1:8080/pii/extract \
  -H "Content-Type: application/json" \
  -d '{"text":"Paciente: Maria Garcia, DNI: 12345678Z","lang":"es"}'
```

**Model lifecycle and service controls:** free memory on demand with `GET /models/loaded`, `POST /models/unload`, and a `keep_alive` idle window; v1.7 also adds warm pools, dynamic batching, request coalescing, rate and concurrency limits, `/livez`, `/readyz`, and opt-in metrics:

```
OPENMED_SERVICE_KEEP_ALIVE=10m uvicorn openmed.service.app:app --host 0.0.0.0 --port 8080
curl -X POST http://127.0.0.1:8080/models/unload -H "Content-Type: application/json" -d '{"all":true}'
```

See the full [REST service guide](https://github.com/maziyarpanahi/openmed/blob/master/docs/rest-service.md).

---

## Documentation

Full guides at **[openmed.life/docs](https://openmed.life/docs/)**.

|  |  |  |
| --- | --- | --- |
| [Getting Started](https://openmed.life/docs/) | [Analyze Text](https://openmed.life/docs/analyze-text) | [Model Registry](https://openmed.life/docs/model-registry) |
| [FAQ](https://github.com/maziyarpanahi/openmed/blob/master/docs/faq.md) | [Anonymization](https://github.com/maziyarpanahi/openmed/blob/master/docs/anonymization.md) | [Batch Processing](https://openmed.life/docs/batch-processing) |
| [Configuration Profiles](https://openmed.life/docs/profiles) | [REST Service](https://github.com/maziyarpanahi/openmed/blob/master/docs/rest-service.md) | [MLX Backend](https://github.com/maziyarpanahi/openmed/blob/master/docs/mlx-backend.md) |
| [Transformers.js Export](https://github.com/maziyarpanahi/openmed/blob/master/docs/export-transformersjs.md) | [FHIR Interop](https://github.com/maziyarpanahi/openmed/blob/master/docs/fhir-interop.md) | [HL7 v2 De-identification](https://github.com/maziyarpanahi/openmed/blob/master/docs/hl7v2-deidentification.md) |
| [v1.6-v1.7 Feature Coverage](https://github.com/maziyarpanahi/openmed/blob/master/docs/release/v1.6-v1.7-feature-coverage.md) | [OpenMed 1.7.0 Release Notes](https://github.com/maziyarpanahi/openmed/blob/master/docs/release/v1.7.0.md) | [Examples](https://github.com/maziyarpanahi/openmed/blob/master/docs/examples.md) |
| [Release Streams](https://github.com/maziyarpanahi/openmed/blob/master/docs/release/semver-and-channels.md) | [Generative Model Policy](https://github.com/maziyarpanahi/openmed/blob/master/docs/generative-model-policy.md) | [Contributing](https://github.com/maziyarpanahi/openmed/blob/master/docs/contributing.md) |
| [Security Policy](https://github.com/maziyarpanahi/openmed/blob/master/SECURITY.md) | [Compliance Posture](https://github.com/maziyarpanahi/openmed/blob/master/docs/compliance.md) |  |

---

## Meet the mascot

[![[94704bf5dfce924f79522c88dfab169d_MD5.png]]](https://github.com/maziyarpanahi/openmed/blob/master/docs/brand/openmed-mascot-icon.png)

OpenMed's guardian is a fluffy Persian cat styled as a tiny **Avicenna (Ibn Sina)** — the great Persian physician whose *Canon of Medicine* was the world's standard medical text for some 600 years. He keeps watch over the open book of medical knowledge, in a palette built around Persian turquoise (*fīrūza*): a local-first guardian for your most private data.

---

## Contributing

Contributions welcome — bug reports, feature requests, and PRs alike. Please read the [Contributing guide](https://github.com/maziyarpanahi/openmed/blob/master/CONTRIBUTING.md) and our [Code of Conduct](https://github.com/maziyarpanahi/openmed/blob/master/CODE_OF_CONDUCT.md) first.

- [Open an issue](https://github.com/maziyarpanahi/openmed/issues)
- [Contributing guide](https://github.com/maziyarpanahi/openmed/blob/master/CONTRIBUTING.md) · [Code of Conduct](https://github.com/maziyarpanahi/openmed/blob/master/CODE_OF_CONDUCT.md) · [Security policy](https://github.com/maziyarpanahi/openmed/blob/master/SECURITY.md)
- **Translations welcome** — help complete the other-language READMEs linked in the switcher at the top.

---

## Security

Found a vulnerability? OpenMed redacts PHI, so a **redaction bypass or PHI/PII leak is a security issue** — please report it **privately**, never as a public issue. See **[SECURITY.md](https://github.com/maziyarpanahi/openmed/blob/master/SECURITY.md)** for the responsible-disclosure policy and the [private reporting form](https://github.com/maziyarpanahi/openmed/security/advisories/new). Never include real patient data in a report.

---

## Credits

OpenMed builds on excellent open-source work — particular thanks to **OpenAI** (the [Privacy Filter](https://huggingface.co/openai/privacy-filter) architecture), **NVIDIA** (the [Nemotron PII dataset](https://huggingface.co/datasets/nvidia/Nemotron-PII-v1)), **Hugging Face** (`transformers`, Transformers.js & the model ecosystem), **Apple** ([MLX](https://github.com/ml-explore/mlx)), and the **[Faker](https://faker.readthedocs.io/)** maintainers.

## License

Released under the [Apache-2.0 License](https://github.com/maziyarpanahi/openmed/blob/master/LICENSE). Third-party asset notices are recorded in [NOTICE](https://github.com/maziyarpanahi/openmed/blob/master/NOTICE).

## Citation

```
@misc{panahi2025openmedneropensourcedomainadapted,
      title={OpenMed NER: Open-Source, Domain-Adapted State-of-the-Art Transformers for Biomedical NER Across 12 Public Datasets},
      ={Maziyar Panahi},
      year={2025},
      eprint={2508.01630},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2508.01630},
}
```

---

## Star History

If OpenMed is useful to you, a star helps others discover it.