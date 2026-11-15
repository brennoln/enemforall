import React from 'react';

interface TrailVisualProps {
  stepId: string;
}

export const TrailVisual: React.FC<TrailVisualProps> = ({ stepId }) => {
  switch (stepId) {
    // ==================== MATEMÁTICA ====================
    case 'trail-mat-1':
      return (
        <svg viewBox="0 0 360 130" className="w-full h-auto rounded-xl bg-blue-50/50 border border-blue-200/70">
          <text x="180" y="20" textAnchor="middle" className="fill-blue-900 font-bold text-[11px]">
            Porcentagem Mental (Ex: 15% de 200)
          </text>
          <rect x="20" y="34" width="95" height="44" rx="10" fill="#ffffff" stroke="#93c5fd" />
          <text x="67" y="52" textAnchor="middle" className="fill-blue-700 font-bold text-[10px]">10% (÷ 10)</text>
          <text x="67" y="68" textAnchor="middle" className="fill-slate-800 font-extrabold text-[12px]">20</text>

          <text x="128" y="60" textAnchor="middle" className="fill-blue-600 font-black text-[14px]">+</text>

          <rect x="140" y="34" width="95" height="44" rx="10" fill="#ffffff" stroke="#93c5fd" />
          <text x="187" y="52" textAnchor="middle" className="fill-blue-700 font-bold text-[10px]">5% (metade)</text>
          <text x="187" y="68" textAnchor="middle" className="fill-slate-800 font-extrabold text-[12px]">10</text>

          <text x="248" y="60" textAnchor="middle" className="fill-blue-600 font-black text-[14px]">=</text>

          <rect x="260" y="34" width="80" height="44" rx="10" fill="#2563eb" />
          <text x="300" y="52" textAnchor="middle" className="fill-blue-100 font-bold text-[10px]">15%</text>
          <text x="300" y="69" textAnchor="middle" className="fill-white font-black text-[13px]">30</text>

          <rect x="20" y="90" width="320" height="28" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
          <text x="180" y="108" textAnchor="middle" className="fill-slate-700 font-semibold text-[10px]">
            Regra de 3 Direta: multiplica cruzado (a/b = c/d ➔ a·d = b·c)
          </text>
        </svg>
      );

    case 'trail-mat-2':
      return (
        <svg viewBox="0 0 360 130" className="w-full h-auto rounded-xl bg-blue-50/50 border border-blue-200/70">
          <text x="180" y="20" textAnchor="middle" className="fill-blue-900 font-bold text-[11px]">
            Escala & Conversão de Volume (Água)
          </text>
          <rect x="20" y="32" width="150" height="48" rx="10" fill="#ffffff" stroke="#93c5fd" />
          <text x="95" y="50" textAnchor="middle" className="fill-blue-700 font-bold text-[10px]">Caixa 1m × 1m × 1m</text>
          <text x="95" y="68" textAnchor="middle" className="fill-slate-900 font-black text-[12px]">1 m³ = 1.000 Litros</text>

          <rect x="190" y="32" width="150" height="48" rx="10" fill="#ffffff" stroke="#93c5fd" />
          <text x="265" y="50" textAnchor="middle" className="fill-blue-700 font-bold text-[10px]">Caixinha 10cm (1 dm)</text>
          <text x="265" y="68" textAnchor="middle" className="fill-slate-900 font-black text-[12px]">1 dm³ = 1 Litro</text>

          <rect x="20" y="90" width="320" height="28" rx="8" fill="#dbeafe" />
          <text x="180" y="108" textAnchor="middle" className="fill-blue-950 font-bold text-[10px]">
            Mapa (cm ➔ km): corte 5 zeros! | Área: E² | Volume: E³
          </text>
        </svg>
      );

    case 'trail-mat-3':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-blue-50/50 border border-blue-200/70">
          <text x="180" y="20" textAnchor="middle" className="fill-blue-900 font-bold text-[11px]">
            Mediana: Sempre Ordene Antes de Pegar o Meio!
          </text>
          {[12, 15, 20, 24, 30].map((val, idx) => (
            <g key={val}>
              <rect
                x={32 + idx * 62}
                y="38"
                width="48"
                height="36"
                rx="9"
                fill={idx === 2 ? '#2563eb' : '#ffffff'}
                stroke={idx === 2 ? '#1d4ed8' : '#93c5fd'}
              />
              <text
                x={56 + idx * 62}
                y="60"
                textAnchor="middle"
                className={`${idx === 2 ? 'fill-white' : 'fill-slate-800'} font-black text-[12px]`}
              >
                {val}
              </text>
            </g>
          ))}
          <text x="180" y="96" textAnchor="middle" className="fill-blue-700 font-bold text-[10px]">
            ▲ Termo central (Mediana = 20)
          </text>
          <text x="180" y="114" textAnchor="middle" className="fill-slate-600 text-[10px]">
            Média = soma tudo ÷ 5 | Moda = número que mais repete
          </text>
        </svg>
      );

    case 'trail-mat-4':
      return (
        <svg viewBox="0 0 360 130" className="w-full h-auto rounded-xl bg-blue-50/50 border border-blue-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-blue-900 font-bold text-[11px]">
            Cilindro (Ab · h) vs. Cone (Ab · h ÷ 3)
          </text>
          {/* Cilindro */}
          <ellipse cx="95" cy="42" rx="34" ry="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.8" />
          <line x1="61" y1="42" x2="61" y2="90" stroke="#2563eb" strokeWidth="1.8" />
          <line x1="129" y1="42" x2="129" y2="90" stroke="#2563eb" strokeWidth="1.8" />
          <path d="M61 90 A34 10 0 0 0 129 90" fill="none" stroke="#2563eb" strokeWidth="1.8" />
          <line x1="95" y1="42" x2="129" y2="42" stroke="#dc2626" strokeWidth="1.8" />
          <text x="112" y="38" textAnchor="middle" className="fill-rose-600 font-bold text-[9px]">R</text>
          <text x="95" y="112" textAnchor="middle" className="fill-slate-800 font-bold text-[10px]">V = π·R²·h</text>

          {/* Cone */}
          <ellipse cx="265" cy="90" rx="34" ry="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.8" />
          <line x1="231" y1="90" x2="265" y2="34" stroke="#2563eb" strokeWidth="1.8" />
          <line x1="299" y1="90" x2="265" y2="34" stroke="#2563eb" strokeWidth="1.8" />
          <text x="265" y="112" textAnchor="middle" className="fill-slate-800 font-bold text-[10px]">V = (π·R²·h) ÷ 3</text>
          <text x="180" y="68" textAnchor="middle" className="fill-rose-600 font-bold text-[10px]">Tem bico? ÷ 3!</text>
        </svg>
      );

    case 'trail-mat-5':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-blue-50/50 border border-blue-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-blue-900 font-bold text-[11px]">
            Função do 1º Grau: y = a·x + b
          </text>
          <line x1="60" y1="100" x2="210" y2="100" stroke="#64748b" strokeWidth="1.5" />
          <line x1="90" y1="28" x2="90" y2="112" stroke="#64748b" strokeWidth="1.5" />
          <line x1="65" y1="95" x2="195" y2="35" stroke="#2563eb" strokeWidth="2.5" />
          <circle cx="90" cy="83" r="4" fill="#dc2626" />
          <text x="98" y="88" className="fill-rose-600 font-bold text-[9px]">b (valor fixo x=0)</text>
          <rect x="215" y="34" width="130" height="68" rx="10" fill="#ffffff" stroke="#93c5fd" />
          <text x="280" y="54" textAnchor="middle" className="fill-blue-800 font-bold text-[10px]">Probabilidade</text>
          <text x="280" y="72" textAnchor="middle" className="fill-slate-800 font-black text-[11px]">P = Quero ÷ Total</text>
          <text x="280" y="89" textAnchor="middle" className="fill-slate-500 text-[9px]">(sempre entre 0 e 1)</text>
        </svg>
      );

    // ==================== BIOLOGIA ====================
    case 'trail-bio-1':
      return (
        <svg viewBox="0 0 360 130" className="w-full h-auto rounded-xl bg-teal-50/50 border border-teal-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-teal-900 font-bold text-[11px]">
            Organelas da Célula Eucarionte
          </text>
          <ellipse cx="110" cy="72" rx="75" ry="42" fill="#ffffff" stroke="#0d9488" strokeWidth="2" />
          <circle cx="105" cy="70" r="16" fill="#ccfbf1" stroke="#0f766e" />
          <text x="105" y="73" textAnchor="middle" className="fill-teal-950 font-bold text-[9px]">Núcleo</text>
          <ellipse cx="62" cy="60" rx="12" ry="6" fill="#fed7aa" stroke="#ea580c" />
          <circle cx="152" cy="62" r="7" fill="#fecaca" stroke="#dc2626" />
          <circle cx="145" cy="90" r="3" fill="#4f46e5" />
          <circle cx="154" cy="92" r="3" fill="#4f46e5" />
          <rect x="200" y="30" width="145" height="86" rx="10" fill="#ffffff" stroke="#99f6e4" />
          <text x="210" y="48" className="fill-orange-700 font-bold text-[9.5px]">🟠 Mitocôndria = Energia (ATP)</text>
          <text x="210" y="66" className="fill-rose-700 font-bold text-[9.5px]">🔴 Lisossomo = Digestão</text>
          <text x="210" y="84" className="fill-indigo-700 font-bold text-[9.5px]">🔵 Ribossomo = Proteínas</text>
          <text x="210" y="102" className="fill-teal-800 font-bold text-[9.5px]">🟢 Golgi = Secreção</text>
        </svg>
      );

    case 'trail-bio-2':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-teal-50/50 border border-teal-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-teal-900 font-bold text-[11px]">
            Fotossíntese: De onde vem o Oxigênio (O₂)?
          </text>
          <rect x="20" y="34" width="135" height="44" rx="10" fill="#ffffff" stroke="#5eead4" />
          <text x="87" y="52" textAnchor="middle" className="fill-teal-800 font-bold text-[10px]">Entra na Planta:</text>
          <text x="87" y="68" textAnchor="middle" className="fill-slate-800 font-extrabold text-[11px]">Luz + CO₂ + H₂O</text>

          <text x="172" y="60" textAnchor="middle" className="fill-teal-700 font-black text-[15px]">➔</text>

          <rect x="188" y="34" width="152" height="44" rx="10" fill="#0d9488" />
          <text x="264" y="52" textAnchor="middle" className="fill-teal-100 font-bold text-[10px]">Sai da Planta:</text>
          <text x="264" y="68" textAnchor="middle" className="fill-white font-black text-[11px]">Glicose + O₂ (da H₂O!)</text>

          <rect x="20" y="88" width="320" height="26" rx="8" fill="#ccfbf1" />
          <text x="180" y="105" textAnchor="middle" className="fill-teal-950 font-bold text-[10px]">
            O O₂ liberado vem da quebra da ÁGUA (H₂O), nunca do CO₂!
          </text>
        </svg>
      );

    case 'trail-bio-3':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-teal-50/50 border border-teal-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-teal-900 font-bold text-[11px]">
            Eutrofização em 4 Passos (Lagoas Poluídas)
          </text>
          {[
            { t: '1. Esgoto/Adubo', s: 'Excesso N e P', c: '#fef3c7' },
            { t: '2. Algas crescem', s: 'Bloqueia a luz', c: '#d1fae5' },
            { t: '3. Bactérias', s: 'Consomem O₂', c: '#fee2e2' },
            { t: '4. Peixes morrem', s: 'Por asfixia!', c: '#fecaca' },
          ].map((b, i) => (
            <g key={b.t}>
              <rect x={12 + i * 86} y="36" width="80" height="52" rx="9" fill={b.c} stroke="#cbd5e1" />
              <text x={52 + i * 86} y="56" textAnchor="middle" className="fill-slate-900 font-bold text-[9px]">{b.t}</text>
              <text x={52 + i * 86} y="73" textAnchor="middle" className="fill-slate-700 text-[8.5px]">{b.s}</text>
            </g>
          ))}
          <text x="180" y="108" textAnchor="middle" className="fill-teal-900 font-bold text-[10px]">
            Espécie Invasora = sem predador natural, vence a nativa por competição!
          </text>
        </svg>
      );

    case 'trail-bio-4':
      return (
        <svg viewBox="0 0 360 120" className="w-full h-auto rounded-xl bg-teal-50/50 border border-teal-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-teal-900 font-bold text-[11px]">
            Vacina Previne vs. Soro Salva na Hora
          </text>
          <rect x="18" y="32" width="155" height="72" rx="10" fill="#ffffff" stroke="#14b8a6" />
          <text x="95" y="50" textAnchor="middle" className="fill-teal-700 font-black text-[11px]">💉 VACINA (Ativa)</text>
          <text x="95" y="68" textAnchor="middle" className="fill-slate-700 text-[9.5px]">Tem ANTÍGENO</text>
          <text x="95" y="84" textAnchor="middle" className="fill-slate-700 font-bold text-[9.5px]">Cria memória imunológica</text>

          <rect x="187" y="32" width="155" height="72" rx="10" fill="#ffffff" stroke="#f59e0b" />
          <text x="264" y="50" textAnchor="middle" className="fill-amber-700 font-black text-[11px]">🐍 SORO (Passivo)</text>
          <text x="264" y="68" textAnchor="middle" className="fill-slate-700 text-[9.5px]">Tem ANTICORPOS PRONTOS</text>
          <text x="264" y="84" textAnchor="middle" className="fill-slate-700 font-bold text-[9.5px]">Ação imediata de emergência</text>
        </svg>
      );

    case 'trail-bio-5':
      return (
        <svg viewBox="0 0 360 120" className="w-full h-auto rounded-xl bg-teal-50/50 border border-teal-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-teal-900 font-bold text-[11px]">
            Fluxo da Vida & Transgênicos
          </text>
          <rect x="22" y="34" width="85" height="38" rx="8" fill="#ffffff" stroke="#14b8a6" />
          <text x="64" y="57" textAnchor="middle" className="fill-teal-900 font-black text-[11px]">DNA</text>
          <text x="122" y="57" textAnchor="middle" className="fill-teal-700 font-black">➔</text>
          <rect x="137" y="34" width="85" height="38" rx="8" fill="#ffffff" stroke="#14b8a6" />
          <text x="179" y="57" textAnchor="middle" className="fill-teal-900 font-black text-[11px]">RNA</text>
          <text x="237" y="57" textAnchor="middle" className="fill-teal-700 font-black">➔</text>
          <rect x="252" y="34" width="88" height="38" rx="8" fill="#0d9488" />
          <text x="296" y="57" textAnchor="middle" className="fill-white font-black text-[11px]">Proteína</text>
          <text x="180" y="96" textAnchor="middle" className="fill-slate-700 font-bold text-[10px]">
            Transgênico = recebe gene de OUTRA espécie | Codominância = AB (expressa os 2)
          </text>
        </svg>
      );

    // ==================== QUÍMICA ====================
    case 'trail-qui-1':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-emerald-50/50 border border-emerald-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-emerald-900 font-bold text-[11px]">
            Como o Sabão Limpa Gordura (Micela)
          </text>
          <circle cx="120" cy="68" r="22" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
          <text x="120" y="71" textAnchor="middle" className="fill-amber-950 font-bold text-[9px]">Óleo</text>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 120 + Math.cos(rad) * 22;
            const y1 = 68 + Math.sin(rad) * 22;
            const x2 = 120 + Math.cos(rad) * 35;
            const y2 = 68 + Math.sin(rad) * 35;
            return (
              <g key={deg}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#475569" strokeWidth="1.8" />
                <circle cx={x2} cy={y2} r="3.5" fill="#0284c7" />
              </g>
            );
          })}
          <rect x="195" y="34" width="148" height="68" rx="10" fill="#ffffff" stroke="#a7f3d0" />
          <text x="205" y="53" className="fill-sky-700 font-bold text-[9.5px]">🔵 Cabeça Polar = liga na ÁGUA</text>
          <text x="205" y="72" className="fill-amber-700 font-bold text-[9.5px]">➖ Cauda Apolar = liga no ÓLEO</text>
          <text x="205" y="90" className="fill-emerald-800 font-bold text-[9.5px]">+ grupos (-OH) = + solúvel em água</text>
        </svg>
      );

    case 'trail-qui-2':
      return (
        <svg viewBox="0 0 360 120" className="w-full h-auto rounded-xl bg-emerald-50/50 border border-emerald-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-emerald-900 font-bold text-[11px]">
            Escala de pH (Cada 1 unidade = 10× mais forte)
          </text>
          <defs>
            <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <rect x="25" y="36" width="310" height="22" rx="11" fill="url(#phGrad)" />
          <text x="35" y="51" className="fill-white font-black text-[10px]">0 (Ácido)</text>
          <text x="180" y="51" textAnchor="middle" className="fill-white font-black text-[10px]">7 (Neutro)</text>
          <text x="325" y="51" textAnchor="end" className="fill-white font-black text-[10px]">14 (Básico)</text>
          <text x="70" y="78" textAnchor="middle" className="fill-rose-700 font-bold text-[9.5px]">Limão / Estômago</text>
          <text x="180" y="78" textAnchor="middle" className="fill-emerald-700 font-bold text-[9.5px]">Água Pura</text>
          <text x="290" y="78" textAnchor="middle" className="fill-blue-700 font-bold text-[9.5px]">Soda / Calcário</text>
          <text x="180" y="104" textAnchor="middle" className="fill-slate-700 font-semibold text-[10px]">
            [H⁺] = 10⁻³ mol/L ➔ pH = 3! (De pH 5 para 3 = 100× mais ácido)
          </text>
        </svg>
      );

    case 'trail-qui-3':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-emerald-50/50 border border-emerald-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-emerald-900 font-bold text-[11px]">
            Funções Orgânicas que o ENEM Cobra
          </text>
          <rect x="15" y="32" width="160" height="36" rx="8" fill="#ffffff" stroke="#6ee7b7" />
          <text x="95" y="48" textAnchor="middle" className="fill-emerald-800 font-bold text-[10px]">-OH em Carbono comum</text>
          <text x="95" y="62" textAnchor="middle" className="fill-slate-900 font-black text-[10.5px]">ÁLCOOL</text>

          <rect x="185" y="32" width="160" height="36" rx="8" fill="#ffffff" stroke="#6ee7b7" />
          <text x="265" y="48" textAnchor="middle" className="fill-emerald-800 font-bold text-[10px]">-OH no Anel Benzênico</text>
          <text x="265" y="62" textAnchor="middle" className="fill-slate-900 font-black text-[10.5px]">FENOL (caráter ácido)</text>

          <rect x="15" y="76" width="160" height="36" rx="8" fill="#ffffff" stroke="#6ee7b7" />
          <text x="95" y="92" textAnchor="middle" className="fill-emerald-800 font-bold text-[10px]">N ligado a C=O</text>
          <text x="95" y="106" textAnchor="middle" className="fill-slate-900 font-black text-[10.5px]">AMIDA (neutra)</text>

          <rect x="185" y="76" width="160" height="36" rx="8" fill="#ffffff" stroke="#6ee7b7" />
          <text x="265" y="92" textAnchor="middle" className="fill-emerald-800 font-bold text-[10px]">N sem C=O</text>
          <text x="265" y="106" textAnchor="middle" className="fill-slate-900 font-black text-[10.5px]">AMINA (básica!)</text>
        </svg>
      );

    case 'trail-qui-4':
      return (
        <svg viewBox="0 0 360 120" className="w-full h-auto rounded-xl bg-emerald-50/50 border border-emerald-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-emerald-900 font-bold text-[11px]">
            Mol, Estequiometria & Gases Ideais
          </text>
          <rect x="20" y="34" width="150" height="66" rx="10" fill="#ffffff" stroke="#6ee7b7" />
          <text x="95" y="54" textAnchor="middle" className="fill-emerald-800 font-bold text-[10px]">1 MOL equivale a:</text>
          <text x="95" y="72" textAnchor="middle" className="fill-slate-900 font-black text-[11px]">Massa Molar (g)</text>
          <text x="95" y="88" textAnchor="middle" className="fill-slate-600 text-[9.5px]">6,02 × 10²³ moléculas</text>

          <rect x="188" y="34" width="152" height="66" rx="10" fill="#059669" />
          <text x="264" y="54" textAnchor="middle" className="fill-emerald-100 font-bold text-[10px]">Equação dos Gases</text>
          <text x="264" y="74" textAnchor="middle" className="fill-white font-black text-[14px]">P · V = n · R · T</text>
          <text x="264" y="90" textAnchor="middle" className="fill-emerald-100 text-[9.5px]">T em Kelvin (°C + 273)</text>
        </svg>
      );

    case 'trail-qui-5':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-emerald-50/50 border border-emerald-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-emerald-900 font-bold text-[11px]">
            Pilha Eletroquímica (Macete: CRAO)
          </text>
          <rect x="25" y="42" width="110" height="52" rx="10" fill="#fee2e2" stroke="#ef4444" />
          <text x="80" y="61" textAnchor="middle" className="fill-rose-800 font-black text-[11px]">ÂNODO (-)</text>
          <text x="80" y="77" textAnchor="middle" className="fill-slate-700 font-bold text-[9.5px]">OXIDA (perde e⁻)</text>
          <text x="80" y="89" textAnchor="middle" className="fill-slate-500 text-[8.5px]">Menor E°</text>

          <line x1="138" y1="62" x2="220" y2="62" stroke="#0f172a" strokeWidth="2.5" />
          <text x="179" y="55" textAnchor="middle" className="fill-slate-900 font-black text-[10px]">elétrons (e⁻) ➔</text>

          <rect x="225" y="42" width="110" height="52" rx="10" fill="#d1fae5" stroke="#10b981" />
          <text x="280" y="61" textAnchor="middle" className="fill-emerald-800 font-black text-[11px]">CÁTODO (+)</text>
          <text x="280" y="77" textAnchor="middle" className="fill-slate-700 font-bold text-[9.5px]">REDUZ (ganha e⁻)</text>
          <text x="280" y="89" textAnchor="middle" className="fill-slate-500 text-[8.5px]">Maior E°</text>

          <text x="180" y="112" textAnchor="middle" className="fill-emerald-950 font-bold text-[10px]">
            ddp = E°(maior) - E°(menor) &gt; 0 | Combustão sempre libera calor (ΔH &lt; 0)
          </text>
        </svg>
      );

    // ==================== FÍSICA ====================
    case 'trail-fis-1':
      return (
        <svg viewBox="0 0 360 120" className="w-full h-auto rounded-xl bg-amber-50/50 border border-amber-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-amber-900 font-bold text-[11px]">
            Cinemática: Conversão km/h ↔ m/s
          </text>
          <rect x="30" y="38" width="95" height="44" rx="10" fill="#ffffff" stroke="#f59e0b" />
          <text x="77" y="56" textAnchor="middle" className="fill-amber-800 font-bold text-[10px]">km/h</text>
          <text x="77" y="72" textAnchor="middle" className="fill-slate-900 font-black text-[12px]">72 km/h</text>

          <text x="180" y="48" textAnchor="middle" className="fill-amber-700 font-black text-[10px]">÷ 3,6 ➔</text>
          <text x="180" y="74" textAnchor="middle" className="fill-slate-700 font-black text-[10px]">← × 3,6</text>

          <rect x="235" y="38" width="95" height="44" rx="10" fill="#d97706" />
          <text x="282" y="56" textAnchor="middle" className="fill-amber-100 font-bold text-[10px]">m/s</text>
          <text x="282" y="72" textAnchor="middle" className="fill-white font-black text-[12px]">20 m/s</text>

          <text x="180" y="104" textAnchor="middle" className="fill-slate-700 font-bold text-[10px]">
            v = ΔS / Δt | Sem tempo? Use Torricelli: v² = v₀² + 2·a·ΔS
          </text>
        </svg>
      );

    case 'trail-fis-2':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-amber-50/50 border border-amber-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-amber-900 font-bold text-[11px]">
            Plano Inclinado & Pressão
          </text>
          <polygon points="35,98 165,98 165,42" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <rect x="92" y="56" width="24" height="16" transform="rotate(-23 104 64)" fill="#f59e0b" rx="3" />
          <text x="100" y="114" textAnchor="middle" className="fill-amber-900 font-bold text-[9.5px]">Massa NÃO muda a aceleração!</text>

          <rect x="195" y="34" width="145" height="72" rx="10" fill="#ffffff" stroke="#fcd34d" />
          <text x="267" y="54" textAnchor="middle" className="fill-amber-800 font-bold text-[10px]">Pressão</text>
          <text x="267" y="74" textAnchor="middle" className="fill-slate-900 font-black text-[13px]">P = F ÷ Área</text>
          <text x="267" y="92" textAnchor="middle" className="fill-slate-600 text-[9px]">Menor área = Maior pressão</text>
        </svg>
      );

    case 'trail-fis-3':
      return (
        <svg viewBox="0 0 360 120" className="w-full h-auto rounded-xl bg-amber-50/50 border border-amber-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-amber-900 font-bold text-[11px]">
            3 Formas de Propagação de Calor
          </text>
          <rect x="16" y="34" width="102" height="68" rx="9" fill="#ffffff" stroke="#fcd34d" />
          <text x="67" y="54" textAnchor="middle" className="fill-amber-800 font-black text-[10px]">Condução</text>
          <text x="67" y="72" textAnchor="middle" className="fill-slate-700 text-[9.5px]">Sólidos (metal)</text>
          <text x="67" y="88" textAnchor="middle" className="fill-slate-500 text-[8.5px]">Colher na panela</text>

          <rect x="129" y="34" width="102" height="68" rx="9" fill="#ffffff" stroke="#fcd34d" />
          <text x="180" y="54" textAnchor="middle" className="fill-amber-800 font-black text-[10px]">Convecção</text>
          <text x="180" y="72" textAnchor="middle" className="fill-slate-700 text-[9.5px]">Fluidos (ar/água)</text>
          <text x="180" y="88" textAnchor="middle" className="fill-slate-500 text-[8.5px]">Quente sobe, frio desce</text>

          <rect x="242" y="34" width="102" height="68" rx="9" fill="#d97706" />
          <text x="293" y="54" textAnchor="middle" className="fill-white font-black text-[10px]">Irradiação</text>
          <text x="293" y="72" textAnchor="middle" className="fill-amber-100 text-[9.5px]">Ondas no VÁCUO</text>
          <text x="293" y="88" textAnchor="middle" className="fill-amber-100 text-[8.5px]">Sol ➔ Terra</text>
        </svg>
      );

    case 'trail-fis-4':
      return (
        <svg viewBox="0 0 360 120" className="w-full h-auto rounded-xl bg-amber-50/50 border border-amber-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-amber-900 font-bold text-[11px]">
            Ondas: Comprimento (λ) e Frequência (f)
          </text>
          <line x1="25" y1="64" x2="335" y2="64" stroke="#cbd5e1" strokeWidth="1.5" />
          <path
            d="M25 64 Q55 24 85 64 T145 64 T205 64 T265 64 T325 64"
            fill="none"
            stroke="#d97706"
            strokeWidth="3"
          />
          <line x1="55" y1="36" x2="175" y2="36" stroke="#dc2626" strokeWidth="1.8" />
          <text x="115" y="32" textAnchor="middle" className="fill-rose-600 font-black text-[10px]">λ (crista a crista)</text>
          <text x="180" y="104" textAnchor="middle" className="fill-slate-800 font-bold text-[10px]">
            v = λ · f | Na Refração, a Frequência (f) NUNCA muda!
          </text>
        </svg>
      );

    case 'trail-fis-5':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-amber-50/50 border border-amber-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-amber-900 font-bold text-[11px]">
            Circuito da Casa (Paralelo) vs. Série
          </text>
          <rect x="20" y="32" width="152" height="76" rx="10" fill="#ffffff" stroke="#10b981" />
          <text x="96" y="50" textAnchor="middle" className="fill-emerald-700 font-black text-[10.5px]">✅ PARALELO (Casa)</text>
          <text x="96" y="68" textAnchor="middle" className="fill-slate-700 text-[9.5px]">Mesma voltagem (127V/220V)</text>
          <text x="96" y="84" textAnchor="middle" className="fill-slate-700 font-bold text-[9.5px]">1 queima, outras ficam acesas</text>

          <rect x="188" y="32" width="152" height="76" rx="10" fill="#ffffff" stroke="#ef4444" />
          <text x="264" y="50" textAnchor="middle" className="fill-rose-700 font-black text-[10.5px]">⚠️ SÉRIE (Pisca-pisca)</text>
          <text x="264" y="68" textAnchor="middle" className="fill-slate-700 text-[9.5px]">Mesma corrente (i)</text>
          <text x="264" y="84" textAnchor="middle" className="fill-slate-700 font-bold text-[9.5px]">1 queima, apaga TUDO!</text>
        </svg>
      );

    case 'trail-mat-6':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-blue-50/50 border border-blue-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-blue-900 font-bold text-[11px]">
            A Ordem dos Escolhidos Importa?
          </text>
          <rect x="20" y="32" width="152" height="78" rx="10" fill="#ffffff" stroke="#3b82f6" />
          <text x="96" y="50" textAnchor="middle" className="fill-blue-700 font-black text-[10.5px]">🔑 SIM (Pódio / Senha)</text>
          <text x="96" y="68" textAnchor="middle" className="fill-slate-700 text-[9.5px]">1º Ana, 2º Bia ≠ 1º Bia, 2º Ana</text>
          <text x="96" y="86" textAnchor="middle" className="fill-blue-800 font-bold text-[9.5px]">Multiplique direto (PFC)</text>

          <rect x="188" y="32" width="152" height="78" rx="10" fill="#ffffff" stroke="#6366f1" />
          <text x="264" y="50" textAnchor="middle" className="fill-indigo-700 font-black text-[10.5px]">👥 NÃO (Comissão / Dupla)</text>
          <text x="264" y="68" textAnchor="middle" className="fill-slate-700 text-[9.5px]">Grupo {'{Ana, Bia}'} = {'{Bia, Ana}'}</text>
          <text x="264" y="86" textAnchor="middle" className="fill-indigo-800 font-bold text-[9.5px]">Combinação (divide repetidos)</text>
        </svg>
      );

    case 'trail-mat-7':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-blue-50/50 border border-blue-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-blue-900 font-bold text-[11px]">
            Triângulo Retângulo (Pitágoras 3-4-5 & SOH CAH TOA)
          </text>
          <polygon points="45,102 45,38 145,102" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <rect x="45" y="92" width="10" height="10" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <text x="32" y="72" textAnchor="middle" className="fill-slate-800 font-bold text-[11px]">3</text>
          <text x="95" y="116" textAnchor="middle" className="fill-slate-800 font-bold text-[11px]">4</text>
          <text x="105" y="64" textAnchor="middle" className="fill-blue-700 font-black text-[11px]">5 (Hip.)</text>

          <rect x="175" y="34" width="165" height="76" rx="10" fill="#ffffff" stroke="#93c5fd" />
          <text x="257" y="53" textAnchor="middle" className="fill-blue-800 font-bold text-[10px]">sen = Oposto / Hip</text>
          <text x="257" y="71" textAnchor="middle" className="fill-blue-800 font-bold text-[10px]">cos = Adjacente / Hip</text>
          <text x="257" y="89" textAnchor="middle" className="fill-blue-800 font-bold text-[10px]">tg = Oposto / Adjacente</text>
        </svg>
      );

    case 'trail-mat-8':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-blue-50/50 border border-blue-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-blue-900 font-bold text-[11px]">
            Juros Simples (Reta) vs. Juros Compostos (Curva)
          </text>
          <rect x="20" y="32" width="152" height="78" rx="10" fill="#ffffff" stroke="#93c5fd" />
          <text x="96" y="50" textAnchor="middle" className="fill-blue-700 font-black text-[10.5px]">📈 Juros Simples</text>
          <text x="96" y="68" textAnchor="middle" className="fill-slate-700 text-[9.5px]">Sempre sobre o valor inicial</text>
          <text x="96" y="86" textAnchor="middle" className="fill-slate-900 font-bold text-[10px]">J = C · i · t</text>

          <rect x="188" y="32" width="152" height="78" rx="10" fill="#ffffff" stroke="#2563eb" />
          <text x="264" y="50" textAnchor="middle" className="fill-blue-800 font-black text-[10.5px]">🚀 Juros Compostos</text>
          <text x="264" y="68" textAnchor="middle" className="fill-slate-700 text-[9.5px]">Juros sobre juros todo mês</text>
          <text x="264" y="86" textAnchor="middle" className="fill-slate-900 font-bold text-[10px]">M = C · (1 + i)ᵗ</text>
        </svg>
      );

    case 'trail-bio-6':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-teal-50/50 border border-teal-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-teal-900 font-bold text-[11px]">
            Seleção Natural (Darwin) — Como Surgem Superbactérias
          </text>
          <rect x="20" y="34" width="98" height="72" rx="10" fill="#ffffff" stroke="#5eead4" />
          <text x="69" y="52" textAnchor="middle" className="fill-teal-800 font-bold text-[10px]">1. População</text>
          <text x="69" y="69" textAnchor="middle" className="fill-slate-700 text-[9px]">Maioria sensível</text>
          <text x="69" y="83" textAnchor="middle" className="fill-rose-600 font-bold text-[9px]">+ algumas resistentes</text>

          <text x="128" y="72" textAnchor="middle" className="fill-teal-700 font-black text-[14px]">➔</text>

          <rect x="138" y="34" width="90" height="72" rx="10" fill="#ffffff" stroke="#5eead4" />
          <text x="183" y="52" textAnchor="middle" className="fill-teal-800 font-bold text-[10px]">2. Antibiótico</text>
          <text x="183" y="69" textAnchor="middle" className="fill-slate-700 text-[9px]">Mata as sensíveis</text>
          <text x="183" y="83" textAnchor="middle" className="fill-rose-600 font-bold text-[9px]">Sobram resistentes</text>

          <text x="238" y="72" textAnchor="middle" className="fill-teal-700 font-black text-[14px]">➔</text>

          <rect x="248" y="34" width="92" height="72" rx="10" fill="#0d9488" />
          <text x="294" y="52" textAnchor="middle" className="fill-teal-100 font-bold text-[10px]">3. Resultado</text>
          <text x="294" y="70" textAnchor="middle" className="fill-white font-bold text-[9.5px]">Resistentes se</text>
          <text x="294" y="83" textAnchor="middle" className="fill-white font-bold text-[9.5px]">multiplicam!</text>
        </svg>
      );

    case 'trail-bio-7':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-teal-50/50 border border-teal-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-teal-900 font-bold text-[11px]">
            Digestão Química & Controle da Glicose
          </text>
          <rect x="20" y="32" width="100" height="76" rx="10" fill="#ffffff" stroke="#5eead4" />
          <text x="70" y="50" textAnchor="middle" className="fill-teal-700 font-black text-[10px]">Boca (pH ~7)</text>
          <text x="70" y="68" textAnchor="middle" className="fill-slate-700 text-[9px]">Amilase digere</text>
          <text x="70" y="82" textAnchor="middle" className="fill-slate-900 font-bold text-[9px]">Amido (carboidrato)</text>

          <rect x="130" y="32" width="100" height="76" rx="10" fill="#ffffff" stroke="#5eead4" />
          <text x="180" y="50" textAnchor="middle" className="fill-teal-700 font-black text-[10px]">Estômago (pH ~2)</text>
          <text x="180" y="68" textAnchor="middle" className="fill-slate-700 text-[9px]">Pepsina digere</text>
          <text x="180" y="82" textAnchor="middle" className="fill-slate-900 font-bold text-[9px]">Proteínas</text>

          <rect x="240" y="32" width="100" height="76" rx="10" fill="#ffffff" stroke="#0d9488" />
          <text x="290" y="50" textAnchor="middle" className="fill-teal-800 font-black text-[10px]">Insulina x Glucagon</text>
          <text x="290" y="68" textAnchor="middle" className="fill-emerald-700 font-bold text-[9px]">Insulina ↓ glicose</text>
          <text x="290" y="82" textAnchor="middle" className="fill-rose-700 font-bold text-[9px]">Glucagon ↑ glicose</text>
        </svg>
      );

    case 'trail-bio-8':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-teal-50/50 border border-teal-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-teal-900 font-bold text-[11px]">
            Vasos Condutores & Estômatos na Planta
          </text>
          <rect x="20" y="32" width="152" height="76" rx="10" fill="#ffffff" stroke="#0d9488" />
          <text x="96" y="50" textAnchor="middle" className="fill-teal-700 font-black text-[10.5px]">⬆️ XILEMA (Seiva Bruta)</text>
          <text x="96" y="68" textAnchor="middle" className="fill-slate-700 text-[9.5px]">Água + Sais minerais</text>
          <text x="96" y="84" textAnchor="middle" className="fill-slate-800 font-bold text-[9.5px]">Da Raiz ➔ Folhas</text>

          <rect x="188" y="32" width="152" height="76" rx="10" fill="#ffffff" stroke="#10b981" />
          <text x="264" y="50" textAnchor="middle" className="fill-emerald-700 font-black text-[10.5px]">⬇️ FLOEMA (Elaborada)</text>
          <text x="264" y="68" textAnchor="middle" className="fill-slate-700 text-[9.5px]">Açúcar da fotossíntese</text>
          <text x="264" y="84" textAnchor="middle" className="fill-slate-800 font-bold text-[9.5px]">Das Folhas ➔ Planta toda</text>
        </svg>
      );

    case 'trail-qui-6':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-emerald-50/50 border border-emerald-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-emerald-900 font-bold text-[11px]">
            Separação de Misturas (Qual método escolher?)
          </text>
          <rect x="20" y="32" width="152" height="76" rx="10" fill="#ffffff" stroke="#10b981" />
          <text x="96" y="50" textAnchor="middle" className="fill-emerald-700 font-black text-[10px]">Heterogênea (2+ fases)</text>
          <text x="96" y="68" textAnchor="middle" className="fill-slate-700 text-[9px]">Água + Areia ➔ Filtração</text>
          <text x="96" y="84" textAnchor="middle" className="fill-slate-700 text-[9px]">Água + Óleo ➔ Decantação</text>

          <rect x="188" y="32" width="152" height="76" rx="10" fill="#ffffff" stroke="#059669" />
          <text x="264" y="50" textAnchor="middle" className="fill-emerald-800 font-black text-[10px]">Homogênea (1 fase)</text>
          <text x="264" y="68" textAnchor="middle" className="fill-slate-700 text-[9px]">Água + Sal ➔ Destilação simples</text>
          <text x="264" y="84" textAnchor="middle" className="fill-slate-700 text-[9px]">Petróleo ➔ Destil. fracionada</text>
        </svg>
      );

    case 'trail-qui-7':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-emerald-50/50 border border-emerald-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-emerald-900 font-bold text-[11px]">
            4 Fatores que Aceleram uma Reação (Cinética)
          </text>
          <rect x="20" y="32" width="76" height="76" rx="10" fill="#ffffff" stroke="#6ee7b7" />
          <text x="58" y="55" textAnchor="middle" className="fill-emerald-700 font-black text-[10px]">🔥 Temp.</text>
          <text x="58" y="75" textAnchor="middle" className="fill-slate-700 text-[8.5px]">Mais calor =</text>
          <text x="58" y="88" textAnchor="middle" className="fill-slate-800 font-bold text-[8.5px]">mais choques</text>

          <rect x="102" y="32" width="76" height="76" rx="10" fill="#ffffff" stroke="#6ee7b7" />
          <text x="140" y="55" textAnchor="middle" className="fill-emerald-700 font-black text-[10px]">🧂 Superf.</text>
          <text x="140" y="75" textAnchor="middle" className="fill-slate-700 text-[8.5px]">Triturado reage</text>
          <text x="140" y="88" textAnchor="middle" className="fill-slate-800 font-bold text-[8.5px]">mais rápido</text>

          <rect x="184" y="32" width="76" height="76" rx="10" fill="#ffffff" stroke="#6ee7b7" />
          <text x="222" y="55" textAnchor="middle" className="fill-emerald-700 font-black text-[10px]">🧪 Conc.</text>
          <text x="222" y="75" textAnchor="middle" className="fill-slate-700 text-[8.5px]">Mais reagente</text>
          <text x="222" y="88" textAnchor="middle" className="fill-slate-800 font-bold text-[8.5px]">= mais rápido</text>

          <rect x="266" y="32" width="74" height="76" rx="10" fill="#059669" />
          <text x="303" y="55" textAnchor="middle" className="fill-white font-black text-[10px]">⚡ Catalis.</text>
          <text x="303" y="75" textAnchor="middle" className="fill-emerald-100 text-[8.5px]">Abaixa energia</text>
          <text x="303" y="88" textAnchor="middle" className="fill-white font-bold text-[8.5px]">de ativação</text>
        </svg>
      );

    case 'trail-qui-8':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-emerald-50/50 border border-emerald-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-emerald-900 font-bold text-[11px]">
            Poluição Atmosférica: Cada Problema e Seu Gás
          </text>
          <rect x="20" y="32" width="100" height="76" rx="10" fill="#ffffff" stroke="#6ee7b7" />
          <text x="70" y="50" textAnchor="middle" className="fill-amber-700 font-black text-[10px]">🌡️ Efeito Estufa</text>
          <text x="70" y="68" textAnchor="middle" className="fill-slate-800 font-bold text-[10px]">CO₂ e CH₄</text>
          <text x="70" y="85" textAnchor="middle" className="fill-slate-600 text-[8.5px]">Retêm calor (IV)</text>

          <rect x="130" y="32" width="100" height="76" rx="10" fill="#ffffff" stroke="#6ee7b7" />
          <text x="180" y="50" textAnchor="middle" className="fill-rose-700 font-black text-[10px]">🌧️ Chuva Ácida</text>
          <text x="180" y="68" textAnchor="middle" className="fill-slate-800 font-bold text-[10px]">SO₂ e NO₂</text>
          <text x="180" y="85" textAnchor="middle" className="fill-slate-600 text-[8.5px]">Baixam pH da chuva</text>

          <rect x="240" y="32" width="100" height="76" rx="10" fill="#ffffff" stroke="#6ee7b7" />
          <text x="290" y="50" textAnchor="middle" className="fill-indigo-700 font-black text-[10px]">☀️ Ozônio (O₃)</text>
          <text x="290" y="68" textAnchor="middle" className="fill-slate-800 font-bold text-[10px]">CFCs</text>
          <text x="290" y="85" textAnchor="middle" className="fill-slate-600 text-[8.5px]">Destroem camada O₃</text>
        </svg>
      );

    case 'trail-fis-6':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-amber-50/50 border border-amber-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-amber-900 font-bold text-[11px]">
            As 3 Leis de Newton na Prática
          </text>
          <rect x="20" y="32" width="100" height="76" rx="10" fill="#ffffff" stroke="#fcd34d" />
          <text x="70" y="50" textAnchor="middle" className="fill-amber-700 font-black text-[10px]">1ª Inércia</text>
          <text x="70" y="68" textAnchor="middle" className="fill-slate-700 text-[8.5px]">Cinto de segurança</text>
          <text x="70" y="83" textAnchor="middle" className="fill-slate-800 font-bold text-[8.5px]">Freou ➔ vai p/ frente</text>

          <rect x="130" y="32" width="100" height="76" rx="10" fill="#ffffff" stroke="#fcd34d" />
          <text x="180" y="50" textAnchor="middle" className="fill-amber-700 font-black text-[10px]">2ª Dinâmica</text>
          <text x="180" y="68" textAnchor="middle" className="fill-slate-900 font-black text-[11px]">F = m · a</text>
          <text x="180" y="83" textAnchor="middle" className="fill-slate-600 text-[8.5px]">Mais massa = + difícil</text>

          <rect x="240" y="32" width="100" height="76" rx="10" fill="#ffffff" stroke="#fcd34d" />
          <text x="290" y="50" textAnchor="middle" className="fill-amber-700 font-black text-[10px]">3ª Ação/Reação</text>
          <text x="290" y="68" textAnchor="middle" className="fill-slate-700 text-[8.5px]">Mesmo valor, sentidos</text>
          <text x="290" y="83" textAnchor="middle" className="fill-slate-800 font-bold text-[8.5px]">opostos (2 corpos!)</text>
        </svg>
      );

    case 'trail-fis-7':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-amber-50/50 border border-amber-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-amber-900 font-bold text-[11px]">
            Óptica da Visão: Miopia vs. Hipermetropia
          </text>
          <rect x="20" y="32" width="152" height="76" rx="10" fill="#ffffff" stroke="#f59e0b" />
          <text x="96" y="50" textAnchor="middle" className="fill-amber-700 font-black text-[10.5px]">👓 MIOPIA (Longe embaçado)</text>
          <text x="96" y="68" textAnchor="middle" className="fill-slate-700 text-[9px]">Imagem ANTES da retina</text>
          <text x="96" y="84" textAnchor="middle" className="fill-slate-900 font-bold text-[9.5px]">Corrige: Lente Divergente</text>

          <rect x="188" y="32" width="152" height="76" rx="10" fill="#ffffff" stroke="#d97706" />
          <text x="264" y="50" textAnchor="middle" className="fill-amber-800 font-black text-[10.5px]">🔍 HIPERMETROPIA (Perto)</text>
          <text x="264" y="68" textAnchor="middle" className="fill-slate-700 text-[9px]">Imagem DEPOIS da retina</text>
          <text x="264" y="84" textAnchor="middle" className="fill-slate-900 font-bold text-[9.5px]">Corrige: Lente Convergente</text>
        </svg>
      );

    case 'trail-fis-8':
      return (
        <svg viewBox="0 0 360 125" className="w-full h-auto rounded-xl bg-amber-50/50 border border-amber-200/70">
          <text x="180" y="19" textAnchor="middle" className="fill-amber-900 font-bold text-[11px]">
            Hidrostática: Empuxo (Flutuar) & Pressão na Água
          </text>
          <rect x="20" y="32" width="152" height="76" rx="10" fill="#ffffff" stroke="#0284c7" />
          <text x="96" y="50" textAnchor="middle" className="fill-sky-700 font-black text-[10.5px]">🚢 Densidade & Empuxo</text>
          <text x="96" y="68" textAnchor="middle" className="fill-slate-700 text-[9px]">d(objeto) &lt; d(água) ➔ Flutua</text>
          <text x="96" y="84" textAnchor="middle" className="fill-slate-700 text-[9px]">d(objeto) &gt; d(água) ➔ Afunda</text>

          <rect x="188" y="32" width="152" height="76" rx="10" fill="#ffffff" stroke="#f59e0b" />
          <text x="264" y="50" textAnchor="middle" className="fill-amber-700 font-black text-[10.5px]">🌊 Pressão Hidrostática</text>
          <text x="264" y="68" textAnchor="middle" className="fill-slate-900 font-bold text-[10px]">P = d · g · h</text>
          <text x="264" y="84" textAnchor="middle" className="fill-slate-700 text-[9px]">+ fundo = + pressão!</text>
        </svg>
      );

    default:
      return null;
  }
};
