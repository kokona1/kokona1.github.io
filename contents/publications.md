<div class="publication-item">
    <div class="publication-info">
        <div class="publication-title">SSH-T³: A Hierarchical Pre-training Framework for Multi-Scenario Financial Risk Assessment</div>
        <div class="publication-authors"><span class="author-name">Zehao Gu</span>, Yateng Tang, Jiarong Xu, Siwei Zhang, Xuehao Zheng<sup>*</sup>, Xi Chen<sup>*</sup>, Yun Xiong</div>
        <div class="publication-venue">Proceedings of the 33rd ACM International Conference on Information and Knowledge Management (CIKM), 2025</div>
        <div class="publication-links">
            <a href="https://dl.acm.org/doi/abs/10.1145/3746252.3761504" target="_blank" class="btn btn-primary btn-sm">Paper</a>
            <button class="btn-abstract abstract-toggle" onclick="toggleAbstract(this)">Abstract</button>
        </div>
        <div class="publication-abstract" style="display: none;">
            <p>Efficiently modeling user behavior on online payment platforms is crucial for accurately identifying potential financial risks. With the rapid growth of online payment platforms, the volume of user transaction data has significantly increased. Moreover, users' payment behaviors often encompass diverse activities and interactions across multiple scenarios. Based on observations from online payment platforms, we identify three key challenges: scarce labels and poor representation robustness, long user payment behavior sequences, and complex and heterogeneous amount-aware scenarios. To address these challenges, we propose a novel Self-Supervised Hierarchical Two-Tower Transformer (SSH-T³), specifically designed for multi-scenario financial risk assessments. We introduce a masked modeling pre-training task to reconstruct multi-scenario day-level transaction amount distributions, effectively mitigating behavior-level noise and enhancing representation robustness. Additionally, we propose a hierarchical Multi-Scenario Payment Behavior Sequence (MS-PBS) modeling approach tailored to business needs, which significantly reduces complexity while capturing user behavior patterns more effectively through day-level representations. Furthermore, we highlight the critical importance of correlating multi-scenario data in MS-PBS modeling to better identify defaulter patterns. To this end, we design a Two-Tower Transformer equipped with a specialized attention mechanism that captures intricate user patterns across scenarios. Extensive experiments conducted on both offline and online real-world business datasets demonstrate the effectiveness and applicability of SSH-T³.</p>
        </div>
    </div>
    <div class="publication-image">
        <img src="static/assets/img/ssh-t3.png" alt="SSH-T3 Model">
    </div>
</div>

<div class="publication-item">
    <div class="publication-info">
        <div class="publication-title">Unifying Text Semantics and Graph Structures for Temporal Text-Attributed Graphs with Large Language Models</div>
        <div class="publication-authors">Siwei Zhang, Yun Xiong<sup>*</sup>, Yateng Tang, Jiarong Xu, Xi Chen, <span class="author-name">Zehao Gu</span>, Xuezheng Hao, Zian Jia, Jiawei Zhang</div>
        <div class="publication-venue">Advances in Neural Information Processing Systems (NeurIPS), 2025</div>
        <div class="publication-links">
            <a href="https://proceedings.neurips.cc/paper_files/paper/2025/hash/4c5722bad9759216474df8fc46c97af2-Abstract-Conference.html" target="_blank" class="btn btn-primary btn-sm">Paper</a>
            <button class="btn-abstract abstract-toggle" onclick="toggleAbstract(this)">Abstract</button>
        </div>
        <div class="publication-abstract" style="display: none;">
            <p>Temporal graph neural networks (TGNNs) have shown remarkable performance in temporal graph modeling. However, real-world temporal graphs often possess rich textual information, giving rise to temporal text-attributed graphs (TTAGs). Such combination of dynamic text semantics and evolving graph structures introduces heightened complexity. Existing TGNNs embed texts statically and rely heavily on encoding mechanisms that biasedly prioritize structural information, overlooking the temporal evolution of text semantics and the essential interplay between semantics and structures for synergistic reinforcement. To tackle these issues, we present CROSS, a flexible framework that seamlessly extends existing TGNNs for TTAG modeling. CROSS is designed by decomposing the TTAG modeling process into two phases: (i) temporal semantics extraction; and (ii) semantic-structural information unification. The key idea is to advance the large language models (LLMs) to dynamically extract the temporal semantics in text space and then generate cohesive representations unifying both semantics and structures. Specifically, we propose a Temporal Semantics Extractor in the CROSS framework, which empowers LLMs to offer the temporal semantic understanding of node's evolving contexts of textual neighborhoods, facilitating semantic dynamics. Subsequently, we introduce the Semantic-structural Co-encoder, which collaborates with the above Extractor for synthesizing illuminating representations by jointly considering both semantic and structural information while encouraging their mutual reinforcement. Extensive experiments show that CROSS achieves state-of-the-art results on four public datasets and one industrial dataset, with 24.7% absolute MRR gain on average in temporal link prediction and 3.7% AUC gain in node classification of industrial application.</p>
        </div>
    </div>
</div>

<div class="publication-item">
    <div class="publication-info">
        <div class="publication-title">MSTEM: Masked Spatiotemporal Event Series Modeling for Urban Undisciplined Events Forecasting</div>
        <div class="publication-authors"><span class="author-name">Zehao Gu</span>, Shiyang Zhou, Yun Xiong*, Yang Luo, Hongrun Ren, Qiang Wang, Xiaofeng Gao*, Philip Yu</div>
        <div class="publication-venue">Proceedings of the 33rd ACM International Conference on Information and Knowledge Management (CIKM), 2024</div>
        <div class="publication-links">
            <a href="https://dl.acm.org/doi/abs/10.1145/3627673.3679810" target="_blank" class="btn btn-primary btn-sm">Paper</a>
            <button class="btn-abstract abstract-toggle" onclick="toggleAbstract(this)">Abstract</button>
        </div>
        <div class="publication-abstract" style="display: none;">
            <p>Urban undisciplined events (UUE) are of increasing concern to urban officials because they reduce the quality of life and cause societal disorder. How to accurately predict future occurrences is a key point in preventing these events. However, existing supervised methods struggle to perform well on sparse UUEs while self-supervised MAE-based methods adopt a traditional random masking strategy which leads to limited performance on UUE forecasting. Fortunately, we have designed an innovative spatiotemporal masking strategy and its corresponding pre-training task called <u>M</u>asked <u>S</u>patio-<u>T</u>emporal <u>E</u>vent Series <u>M</u>odeling (MSTEM). Through Cluster-assisted region masking, MSTEM efficiently distributes masked regions evenly among different clusters, enhancing the model's ability to capture spatial correlation and heterogeneity while addressing sparse region distribution of UUEs. Frequency-enhanced patch masking helps the model to sufficiently extract the temporal features of UUEs by reconstructing multiple views. Additionally, we propose future merge and cluster label modeling to enhance the extraction of spatiotemporal dependencies, thereby improving the performance of MSTEM on downstream prediction tasks. Experimental evaluations on four real-world datasets including crimes and disorderly conduct show that our masked autoencoder with MSTEM outperforms most of the state-of-the-art baselines.</p>
        </div>
    </div>
    <div class="publication-image publication-image-small">
        <img src="static/assets/img/mstem.png" alt="MSTEM Model">
    </div>
</div>

<div class="publication-item">
    <div class="publication-info">
        <div class="publication-title">REDI: Recurrent Diffusion Model for Probabilistic Time Series Forecasting</div>
        <div class="publication-authors">Shiyang Zhou, <span class="author-name">Zehao Gu</span>, Yun Xiong*, Yang Luo, Qiang Wang, Xiaofeng Gao*</div>
        <div class="publication-venue">Proceedings of the 33rd ACM International Conference on Information and Knowledge Management (CIKM), 2024</div>
        <div class="publication-links">
            <a href="https://dl.acm.org/doi/abs/10.1145/3627673.3679808" target="_blank" class="btn btn-primary btn-sm">Paper</a>
            <button class="btn-abstract abstract-toggle" onclick="toggleAbstract(this)">Abstract</button>
        </div>
        <div class="publication-abstract" style="display: none;">
            <p>Time series forecasting (TSF) consists of point prediction and probabilistic forecasting. Unlike point forecasting which predicts an expected value of a future target, probabilistic time series forecasting models the uncertainty in data by predicting the distribution of future values, which enhances decision-making flexibility and improves risk management. Traditional probabilistic forecasting methods usually assume a fixed distribution of data, which is not always true for time series. Recently, there have been efforts to adapt diffusion models for time series owing to their exceptional ability to model the distribution of data without prior assumptions. However, how to apply advantages of diffusion models to time series forecasting remains a substantial challenge due to specific issues in time series such as distribution drift and complex dynamic temporal patterns. In this paper, we focus on the adaptation of diffusion models for time series forecasting. We propose REDI, a recurrent diffusion model that achieves effective probabilistic time series prediction with recurrent forward diffusion process and step-aware guidance in backward denoising process. The recurrent forward diffusion process enables the model to pay more attention to the impact of recent history on future values during the diffusion process, while the step-aware guidance facilitates precise guidance based on historical information during the denoising process. We conduct experiments on 5 real-world datasets and achieve average rankings of 1.8 for deterministic metrics and 1.5 for probabilistic metrics across 12 baselines, which strongly demonstrates the effectiveness of REDI.</p>
        </div>
    </div>
    <div class="publication-image">
        <img src="static/assets/img/redi.png" alt="REDI Model">
    </div>
</div>

<div class="publication-item">
    <div class="publication-info">
        <div class="publication-title">Meteorology-Assisted Spatio-Temporal Graph Network for Uncivilized Urban Event Prediction</div>
        <div class="publication-authors">Yang Luo, <span class="author-name">Zehao Gu</span>, Shiyang Zhou, Yun Xiong, Xiaofeng Gao*</div>
        <div class="publication-venue">IEEE International Conference on Data Mining (ICDM), 2023</div>
        <div class="publication-links">
            <a href="https://ieeexplore.ieee.org/abstract/document/10415686/" target="_blank" class="btn btn-primary btn-sm">Paper</a>
            <button class="btn-abstract abstract-toggle" onclick="toggleAbstract(this)">Abstract</button>
        </div>
        <div class="publication-abstract" style="display: none;">
            <p>Uncivilized urban events disrupt urban order and have a detrimental impact on daily life. Recognizing the significant implications of these events, urban managers strive to proactively prevent them by accurately predicting their future occurrence. However, existing methods overlook crucial contextual information within urban scenarios while mining spatio-temporal dependencies in single event series. Fortunately, we discovered a connection between meteorological conditions and uncivilized events. To leverage this relationship, we propose a novel approach named the Meteorology-Assisted Spatio-Temporal Graph Neural Network (MAST) which integrates meteorological information into the spatio-temporal dependency modeling for predicting urban uncivilized events. Additionally, our approach captures latent regularities in human behavior by explicitly modeling individuals' psychological states based on meteorological information. We also adopt cross-view contrastive learning between urban regions to dynamically capture the informative components of meteorological information for precise prediction of urban uncivilized events. Experimental evaluations on a real-world dataset demonstrate the superiority of MAST over state-of-the-art baselines in terms of predictive performance.</p>
        </div>
    </div>
</div>