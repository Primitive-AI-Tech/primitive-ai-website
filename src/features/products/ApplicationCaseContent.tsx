import { EditorialIcon, type EditorialIconName } from "@/components/marketing/EditorialIcon";
import {
  financeSteps, orderSteps, pilotSteps, researchSteps, warehouseSteps,
  type ApplicationCase, type CaseStep,
} from "./application-cases";
import { useProductCopy, type ProductText } from "./product-copy";

const mediaPath = "/images/products/v5";
function CasePhoto({
  file, alt, width = 1640, height, className,
}: {
  file: string; alt: ProductText; width?: number; height: number; className?: string;
}) {
  const copy = useProductCopy();
  return <img className={className} src={`${mediaPath}/${file}`} width={width} height={height} loading="lazy" decoding="async" alt={copy(alt)} />;
}

function Steps({ steps, order = false }: { steps: readonly CaseStep[]; order?: boolean }) {
  const copy = useProductCopy();
  return (
    <ol className={order ? "order-flow" : "execution-steps"}>
      {steps.map(([icon, title, description]) => (
        <li key={icon}>
          <EditorialIcon name={icon} />
          <div><h4>{copy(title)}</h4>{description && <p>{copy(description)}</p>}</div>
        </li>
      ))}
    </ol>
  );
}

const typeLabels = {
  example: ["Illustrative example", "Ví dụ minh họa"],
  test: ["Trial run result", "Kết quả chạy thử"],
  custom: ["Tailored to your needs", "Tùy biến theo nhu cầu"],
} as const satisfies Record<ApplicationCase["type"], ProductText>;

const briefLabels = [
  ["Request", "Yêu cầu"], ["Configuration", "Cách cấu hình"], ["Output to review", "Đầu ra để kiểm tra"],
] as const satisfies readonly ProductText[];

function CaseHeading({ item, titleId }: { item: ApplicationCase; titleId: string }) {
  const copy = useProductCopy();
  const isOrder = item.id === "order-example";
  const title = (
    <div className="example-copy">
      <p className={`case-type case-type-${item.type}`}>{copy(typeLabels[item.type])}</p>
      <h3 id={titleId}>{copy(item.title)}</h3>
    </div>
  );

  return (
    <header className="case-header">
      {isOrder ? (
        <div className="order-opening">
          {title}
          <CasePhoto file="deck-valves.webp" className="order-photo" height={546}
            alt={["Valve assemblies and seals on an assembly bench.", "Cụm van và gioăng trên bàn lắp ráp."]} />
        </div>
      ) : title}
      <dl className="case-brief" aria-label={copy(["Request, configuration, and output", "Yêu cầu, cách cấu hình và đầu ra"])}>
        {briefLabels.map((label, index) => (
          <div key={label[0]}><dt>{copy(label)}</dt><dd>{copy(item.brief[index])}</dd></div>
        ))}
      </dl>
    </header>
  );
}

function Order() {
  const copy = useProductCopy();
  return (
    <>
      <Steps steps={orderSteps} order />
      <dl className="order-quantities">
        <div><dt>{copy(["Seals required", "Gioăng cần dùng"])}</dt><dd>400</dd></div>
        <div><dt>{copy(["Seals in stock", "Gioăng có sẵn"])}</dt><dd>300</dd></div>
        <div><dt>{copy(["Seals to purchase", "Gioăng cần mua thêm"])}</dt><dd>100 <span className="chapter-badge status-badge">{copy(["Pending approval", "Chờ phê duyệt"])}</span></dd></div>
      </dl>
      <p className="example-note">{copy(["Connections and approval steps are configured per deployment.", "Kết nối và bước duyệt được thiết lập cho từng triển khai."])}</p>
    </>
  );
}

function Research() {
  const copy = useProductCopy();
  return (
    <>
      <Steps steps={researchSteps} />
      <div className="output output-body research-output">
        <h4><EditorialIcon name="report" />{copy(["Project research results", "Kết quả tìm dự án"])}</h4>
        <p className="research-result"><strong>6</strong> {copy(["suggested projects", "dự án được đề xuất"])}</p>
        <p className="research-verification">
          {copy(["Project IDs, dates, and statuses were checked against original records. Relevance was assessed during this run.", "Mã, ngày và trạng thái dự án đã được đối chiếu với hồ sơ gốc. Mức độ phù hợp là nhận định từ lần chạy."])}
        </p>
      </div>
      <p className="example-note">{copy(["Individual trial run · About 78 seconds", "Lần chạy thử riêng · Khoảng 78 giây"])}</p>
    </>
  );
}

function Warehouse() {
  const copy = useProductCopy();
  return (
    <>
      <Steps steps={warehouseSteps} />
      <figure className="output">
        <CasePhoto file="deck-warehouse.webp" className="output-photo" height={546}
          alt={["An employee scanning an item code in a warehouse.", "Nhân viên quét mã hàng trong kho."]} />
        <div className="output-body">
          <div className="table-scroll">
            <table>
              <caption>{copy(["Sample discrepancy report", "Bảng chênh lệch mẫu"])}</caption>
              <thead><tr>
                <th scope="col">{copy(["Item code", "Mã hàng"])}</th><th scope="col">{copy(["System", "Số liệu hệ thống", "products.warehouse.systemQuantity"])}</th>
                <th scope="col">{copy(["Count", "Số lượng kiểm kê", "products.warehouse.countedQuantity"])}</th><th scope="col">{copy(["Difference", "Chênh lệch"])}</th>
              </tr></thead>
              <tbody>
                <tr><th scope="row">MAT-014</th><td>120</td><td>112</td><td>−8</td></tr>
                <tr><th scope="row">MAT-087</th><td>46</td><td>51</td><td>+5</td></tr>
              </tbody>
            </table>
          </div>
          <p className="output-note">{copy(["Difference = counted quantity − quantity in the system.", "Chênh lệch = số lượng kiểm kê − số lượng trên hệ thống."])}</p>
        </div>
      </figure>
      <p className="example-note">{copy(["The workflow has read-only access. The warehouse team verifies the differences.", "Quy trình chỉ đọc dữ liệu. Thủ kho kiểm tra bảng chênh lệch."])}</p>
    </>
  );
}

const profileMetrics = [
  ["workflows", ["16 steps", "16 bước"], ["Read, research, write, index", "Đọc, tra cứu, viết, lập chỉ mục"]],
  ["report", ["3,021 words", "3.021 từ"], ["In-depth report", "Báo cáo chuyên sâu"]],
  ["schedule", ["101 seconds", "101 giây"], ["Processing time", "Thời gian xử lý"]],
] as const satisfies readonly CaseStep[];

function Profile() {
  const copy = useProductCopy();
  return (
    <>
      <div className="profile-composition">
        <figure className="profile-capture">
          <a href={`${mediaPath}/deck-studio.webp`} aria-label={copy(["View the full Workflow Studio screenshot", "Xem toàn bộ ảnh giao diện Workflow Studio"])}>
            <CasePhoto file="deck-studio.webp" width={1600} height={1000}
              alt={["Company profiling in Workflow Studio, with connected steps from reading and researching data to saving the result.", "Quy trình lập hồ sơ doanh nghiệp trong Workflow Studio, với các bước nối từ đọc dữ liệu đến tra cứu và lưu kết quả."]} />
          </a>
          <figcaption>{copy(["Workflow Studio / Representative configuration", "Workflow Studio / Cấu hình đại diện"])}</figcaption>
        </figure>
        <div className="profile-output">
          <ul className="profile-metrics" role="list">
            {profileMetrics.map(([name, value, label]) => <li key={name}><EditorialIcon name={name} className="case-evidence-icon" /><strong>{copy(value)}</strong><span>{copy(label)}</span></li>)}
          </ul>
          <p className="profile-check">{copy(["The index matched the saved profile.", "Chỉ mục khớp với hồ sơ đã lưu."])}</p>
        </div>
      </div>
      <p className="evidence-context">{copy(["Individual trial run · Five fields fell short of their length requirements.", "Lần chạy thử riêng · Năm trường chưa đạt độ dài yêu cầu."])}</p>
    </>
  );
}

const reportOutputs = {
  finance: {
    icon: "finance-report",
    image: "receivables.webp", height: 839,
    alt: ["Receivables records and a calculator on a desk.", "Sổ theo dõi công nợ và máy tính trên bàn làm việc."],
    title: ["Friday closing receivables", "Công nợ chốt cuối ngày thứ Sáu"],
    items: [
      ["Balances by customer", "Số dư theo khách hàng"],
      ["Overdue balances to follow up", "Các khoản quá hạn cần theo dõi"],
      ["Balances without a payment due date", "Các khoản chưa có hạn thanh toán"],
    ],
  },
  pilot: {
    icon: "report",
    image: "deck-pilot.webp", height: 923,
    alt: ["Two colleagues reviewing documents together.", "Hai đồng nghiệp cùng rà soát tài liệu."],
    title: ["Pilot run record", "Hồ sơ chạy thử"],
    items: [
      ["Output in the format your team needs", "Kết quả theo định dạng đội ngũ cần"],
      ["Sources used and actions taken", "Nguồn đã dùng và thao tác đã thực hiện"],
      ["Actions that require approval", "Các thao tác cần người phụ trách duyệt"],
    ],
  },
} as const satisfies Record<string, { icon: EditorialIconName; image: string; height: number; alt: ProductText; title: ProductText; items: readonly ProductText[] }>;

function ReportOutput({ type }: { type: keyof typeof reportOutputs }) {
  const copy = useProductCopy();
  const report = reportOutputs[type];

  return (
    <figure className="output output-report">
      {type === "pilot" ? (
        <img className="output-photo" src="/images/home/v5/deck-pilot.webp" width={1640} height={report.height} loading="lazy" decoding="async" alt={copy(report.alt)} />
      ) : (
        <CasePhoto className="output-photo" file={report.image} height={report.height} alt={report.alt} />
      )}
      <figcaption className="output-body">
        <h4><EditorialIcon name={report.icon} />{copy(report.title)}</h4>
        <ul className="report-list">
          {report.items.map((item) => <li key={item[0]}>{copy(item)}</li>)}
        </ul>
      </figcaption>
    </figure>
  );
}

function Finance() {
  const copy = useProductCopy();
  return (
    <>
      <Steps steps={financeSteps} />
      <ReportOutput type="finance" />
      <p className="example-note">{copy(["Finance reviews flagged balances before taking action.", "Tài chính rà soát các khoản được đánh dấu trước khi xử lý."])}</p>
    </>
  );
}

const screeningMetrics = [
  [521, "stock", ["profiles in the index", "hồ sơ trong chỉ mục"]],
  [20, "workflows", ["buyers scored", "bên mua được chấm điểm"]],
  [10, "deliver", ["saved ranking results", "kết quả xếp hạng đã lưu"]],
] as const;

function Screening() {
  const copy = useProductCopy();
  return (
    <>
      <dl className="screening-metrics">
        {screeningMetrics.map(([value, icon, label]) => <div key={icon}><dt>{copy(label)}</dt><dd>{value}<EditorialIcon name={icon} className="case-evidence-icon" /></dd></div>)}
      </dl>
      <p className="screening-warning">
        <span aria-hidden="true">⚠</span>
        {copy(["Two profiles had eligibility warnings. A specialist should review them before outreach.", "Hai hồ sơ có cảnh báo về điều kiện. Cần chuyên viên rà soát trước khi liên hệ."])}
      </p>
      <p className="evidence-context">{copy(["Individual trial run · Scoring took about 4 minutes", "Lần chạy thử riêng · Chấm điểm trong khoảng 4 phút"])}</p>
    </>
  );
}

function YourCase() {
  return <><Steps steps={pilotSteps} /><ReportOutput type="pilot" /></>;
}

const contentById = {
  "order-example": { className: "example example-order", Content: Order },
  research: { className: "example example-workflow example-research", Content: Research },
  "warehouse-example": { className: "example example-workflow example-warehouse", Content: Warehouse },
  "company-profile": { className: "evidence-panel evidence-profile", Content: Profile },
  "finance-example": { className: "example example-workflow example-finance", Content: Finance },
  "buyer-screening": { className: "evidence-panel evidence-screening", Content: Screening },
  "your-use-case": { className: "example example-workflow example-your-case", Content: YourCase },
} satisfies Record<ApplicationCase["id"], { className: string; Content: () => JSX.Element }>;

export function ApplicationCaseContent({ item, active }: { item: ApplicationCase; active: boolean }) {
  const titleId = `${item.id}-title`;
  const { className, Content } = contentById[item.id];

  return (
    <div className={className} id={item.id} data-case-selection data-panel role="tabpanel" aria-labelledby={`case-tab-${item.id}`} hidden={!active} tabIndex={active ? 0 : undefined}>
      {active && <><CaseHeading item={item} titleId={titleId} /><Content /></>}
    </div>
  );
}
