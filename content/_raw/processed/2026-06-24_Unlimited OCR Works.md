---
title: "Unlimited OCR Works"
source: "https://arxiv.org/abs/2606.23050"
author:
  - "[[Youyang Yin]]"
  - "[[Huanhuan Liu]]"
  - "[[YY]]"
  - "[[Qunyi Xie]]"
  - "[[Chaorun Liu]]"
  - "[[Shiqi Yang]]"
  - "[[Shaohua Wang]]"
  - "[[Zhanlong Liu]]"
  - "[[Hao Zou]]"
  - "[[Jinyue Chen]]"
  - "[[Shu Wei]]"
  - "[[Jingjing Wu]]"
  - "[[Mingxin Huang]]"
  - "[[Zhen Wu]]"
  - "[[Guibin Wang]]"
  - "[[Tengyu Du]]"
  - "[[Lei Jia]]"
published:
created: 2026-06-24
description: "Abstract page for arXiv paper 2606.23050: Unlimited OCR Works"
tags:
  - "clippings"
---
## Title:Unlimited OCR Works

Authors:[Youyang Yin](https://arxiv.org/search/cs?searchtype=author&query=Yin,+Y), [Huanhuan Liu](https://arxiv.org/search/cs?searchtype=author&query=Liu,+H), YY, [Qunyi Xie](https://arxiv.org/search/cs?searchtype=author&query=Xie,+Q), [Chaorun Liu](https://arxiv.org/search/cs?searchtype=author&query=Liu,+C), [Shiqi Yang](https://arxiv.org/search/cs?searchtype=author&query=Yang,+S), [Shaohua Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+S), [Zhanlong Liu](https://arxiv.org/search/cs?searchtype=author&query=Liu,+Z), [Hao Zou](https://arxiv.org/search/cs?searchtype=author&query=Zou,+H), [Jinyue Chen](https://arxiv.org/search/cs?searchtype=author&query=Chen,+J), [Shu Wei](https://arxiv.org/search/cs?searchtype=author&query=Wei,+S), [Jingjing Wu](https://arxiv.org/search/cs?searchtype=author&query=Wu,+J), [Mingxin Huang](https://arxiv.org/search/cs?searchtype=author&query=Huang,+M), [Zhen Wu](https://arxiv.org/search/cs?searchtype=author&query=Wu,+Z), [Guibin Wang](https://arxiv.org/search/cs?searchtype=author&query=Wang,+G), [Tengyu Du](https://arxiv.org/search/cs?searchtype=author&query=Du,+T), [Lei Jia](https://arxiv.org/search/cs?searchtype=author&query=Jia,+L)

[View PDF](https://arxiv.org/pdf/2606.23050) [HTML (experimental)](https://arxiv.org/html/2606.23050v1)

> Abstract:Recently, end-to-end OCR models, exemplified by DeepSeek OCR, have once again thrust OCR into the spotlight. A widely held view is that employing a large language model (LLM) as the decoder allows the model to leverage the prior distribution of language, leading to improved OCR performance. However, the downside is equally evident: as the output sequence lengthens, the accumulated KV cache drives up memory consumption and progressively slows down generation. This stands in stark contrast to humans, who exhibit no such decline in efficiency during long-horizon copying tasks. In this technical report, we propose Unlimited OCR, a model designed to emulate human parsing working memory. Taking DeepSeek OCR as the baseline, we replace all attention layers in the decoder with our proposed Reference Sliding Window Attention (R-SWA), which reduces attention computation costs while maintaining a constant KV cache throughout the entire decoding process. By combining the high compression rate of DeepSeek OCR's encoder with our constant KV cache design, Unlimited OCR can transcribe dozens of pages of documents in a single forward pass under a standard maximum length of 32K. More importantly, R-SWA is a general-purpose parsing attention mechanism - beyond OCR, it is equally applicable to tasks such as ASR, translation, etc. Codes and model weights are publicly available at [this http URL](http://github.com/baidu/Unlimited-OCR).

| Subjects: | Computer Vision and Pattern Recognition (cs.CV); Computation and Language (cs.CL) |
| --- | --- |
| Cite as: | [arXiv:2606.23050](https://arxiv.org/abs/2606.23050) \[cs.CV\] |
|  | (or [arXiv:2606.23050v1](https://arxiv.org/abs/2606.23050v1) \[cs.CV\] for this version) |
|  | [https://doi.org/10.48550/arXiv.2606.23050](https://doi.org/10.48550/arXiv.2606.23050) |

## Submission history

From: Youyang Yin \[[view email](https://arxiv.org/show-email/5878c94d/2606.23050)\]  
**\[v1\]** Mon, 22 Jun 2026 09:01:29 UTC (272 KB)

[Which authors of this paper are endorsers?](https://arxiv.org/auth/show-endorsers/2606.23050) | Disable MathJax ([What is MathJax?](https://info.arxiv.org/help/mathjax.html))