import type { EditorialIconName } from "@/components/marketing/EditorialIcon";
import type { ProductText } from "./product-copy";

export type CaseStep = readonly [icon: EditorialIconName, title: ProductText, description?: ProductText];
type Case = {
  id: string;
  label: ProductText;
  title: ProductText;
  type: "example" | "test" | "custom";
  brief: readonly [request: ProductText, configuration: ProductText, output: ProductText];
};

export const cases = [
  {
    id: "order-example", label: ["Materials planning", "Kế hoạch vật tư"],
    title: ["From a customer request to a materials plan", "Từ yêu cầu khách hàng đến kế hoạch vật tư"], type: "example",
    brief: [
      ["“Can you deliver 200 valve assemblies by the end of the month?”", "“Giao 200 cụm van kịp cuối tháng được không?”"],
      ["Connect email, ERP, and inventory. Require approval before creating an ERP order.", "Kết nối email, ERP và kho. Đặt bước duyệt trước khi tạo đơn trên ERP."],
      ["A purchase request for the shortage, ready for the responsible person to review.", "Đề nghị mua phần thiếu để người phụ trách duyệt."],
    ],
  },
  {
    id: "research", label: ["Project research", "Tìm dự án"],
    title: ["Find relevant research projects", "Tìm dự án nghiên cứu phù hợp"], type: "test",
    brief: [
      ["“Which projects might this company be interested in?”", "“Công ty này có thể quan tâm đến những dự án nào?”"],
      ["Let the agent plan, research the company, and check project records.", "Cho tác nhân tự lập kế hoạch, tra cứu doanh nghiệp và đối chiếu hồ sơ dự án."],
      ["Suggested projects with details to check against the source records.", "Danh sách dự án đề xuất kèm thông tin để đối chiếu với hồ sơ gốc."],
    ],
  },
  {
    id: "warehouse-example", label: ["Stock reconciliation", "Đối chiếu tồn kho"],
    title: ["Reconcile a stock count", "Đối chiếu số liệu kiểm kê"], type: "example",
    brief: [
      ["Check for discrepancies between stock count sheets and inventory records.", "Kiểm tra chênh lệch giữa phiếu kiểm kê và số liệu tồn kho."],
      ["Grant read-only access and match warehouse, date, item code, and unit of measure.", "Chỉ cấp quyền đọc và đặt quy tắc khớp kho, ngày, mã hàng và đơn vị tính."],
      ["An Excel report of discrepancies for the warehouse team to verify.", "Bảng Excel ghi rõ từng chênh lệch để thủ kho xác minh."],
    ],
  },
  {
    id: "company-profile", label: ["Company profiling", "Lập hồ sơ"],
    title: ["Build a company profile", "Lập hồ sơ doanh nghiệp"], type: "test",
    brief: [
      ["Produce a research profile for a company.", "Lập hồ sơ nghiên cứu về một doanh nghiệp."],
      ["Configure research, report writing, and indexing in Workflow Studio.", "Thiết lập các bước tra cứu, viết báo cáo và lập chỉ mục trong Workflow Studio."],
      ["A saved profile and index that reviewers can cross-check.", "Hồ sơ đã lưu và chỉ mục để đối chiếu."],
    ],
  },
  {
    id: "finance-example", label: ["Receivables report", "Báo cáo công nợ"],
    title: ["Prepare a weekly accounts receivable report", "Báo cáo công nợ phải thu hằng tuần"], type: "example",
    brief: [
      ["Take an accounts receivable snapshot at the end of every Friday.", "Chốt công nợ phải thu cuối ngày thứ Sáu hằng tuần."],
      ["Schedule the run for Friday, with a PDF template and due-date review rules.", "Lập lịch chạy cuối thứ Sáu, dùng mẫu PDF và quy tắc rà soát hạn thanh toán."],
      ["A PDF for the finance team to track and review.", "Báo cáo PDF để bộ phận tài chính theo dõi và kiểm tra."],
    ],
  },
  {
    id: "buyer-screening", label: ["Buyer screening", "Sàng lọc bên mua"],
    title: ["Screen and rank buyers", "Sàng lọc và xếp hạng bên mua"], type: "test",
    brief: [
      ["Screen a list of potential buyers against defined criteria.", "Sàng lọc danh sách bên mua theo tiêu chí."],
      ["Let the agent initiate a scoring workflow that uses a predefined set of criteria.", "Cho tác nhân chủ động chạy quy trình chấm điểm theo bộ tiêu chí đã định."],
      ["A ranked list and warnings for a specialist to review.", "Danh sách xếp hạng và các cảnh báo để người phụ trách rà soát."],
    ],
  },
  {
    id: "your-use-case", label: ["Your use case", "Bài toán của bạn", "products.applications.yourUseCase"],
    title: ["Your use case", "Bài toán của bạn", "products.applications.yourUseCase"], type: "custom",
    brief: [
      ["Choose recurring work or a task that often slows down at handoffs.", "Xử lý một việc lặp lại hoặc thường bị chậm ở khâu bàn giao."],
      ["Configure Core Agentic around your team’s workflow, tools, and permissions.", "Điều chỉnh Core Agentic theo quy trình, công cụ và quyền của đội ngũ."],
      ["Pilot output to compare against criteria agreed with your team.", "Kết quả chạy thử để đối chiếu với tiêu chí đã thống nhất."],
    ],
  },
] as const satisfies readonly Case[];

export type ApplicationCase = (typeof cases)[number];

export const legacyCaseTargets: Record<string, ApplicationCase["id"]> = {
  "outbound-research": "buyer-screening",
  "sales-support": "buyer-screening",
  "evidence": "research",
  "knowledge-research": "research",
  "internal-operations": "warehouse-example",
  "finance-reconciliation": "finance-example",
  "people-hr": "your-use-case",
  "documents-legal": "your-use-case",
};

export const orderSteps = [
  ["email", ["Incoming email", "Email đến"], ["Read the request.", "Đọc yêu cầu."]],
  ["channels", ["Intake", "Tiếp nhận"], ["Ask for missing details.", "Hỏi thêm nếu thiếu."]],
  ["order", ["Order", "Đơn hàng"], ["Create it in ERP after approval.", "Tạo trên ERP sau khi duyệt."]],
  ["workflows", ["Production", "Sản xuất"], ["Check capacity and materials.", "Kiểm tra công suất và vật tư."]],
  ["stock", ["Inventory", "Tồn kho"], ["Check quantities available.", "Kiểm tra lượng có thể dùng."]],
  ["approval", ["Purchasing", "Mua hàng"], ["Send the request for approval.", "Gửi đề nghị mua để duyệt."]],
] as const satisfies readonly CaseStep[];

export const researchSteps = [
  ["internal", ["Identify the company", "Xác định doanh nghiệp"], ["Review what the company does to guide the search.", "Tìm hiểu hoạt động của doanh nghiệp để định hướng tra cứu."]],
  ["search", ["Find project information", "Tìm thông tin dự án"], ["Find candidates and check project IDs, dates, and statuses against the source records.", "Tìm dự án tiềm năng và đối chiếu mã, ngày và trạng thái với hồ sơ gốc."]],
  ["order", ["Assess the fit", "Đánh giá mức độ phù hợp"], ["Suggest projects related to the company’s activities for the team to review.", "Chọn các dự án có liên quan đến hoạt động của doanh nghiệp để đội ngũ rà soát."]],
] as const satisfies readonly CaseStep[];

export const warehouseSteps = [
  ["order", ["Read the count sheet", "Đọc phiếu kiểm kê"], ["Identify the warehouse and count date.", "Xác định kho và ngày kiểm kê."]],
  ["search", ["Compare quantities", "So sánh số lượng"], ["Match item codes and units of measure.", "Khớp mã hàng và đơn vị tính."]],
  ["spreadsheet", ["Export discrepancies", "Xuất bảng chênh lệch"], ["Save an Excel file for review.", "Lưu tệp Excel để kiểm tra."]],
] as const satisfies readonly CaseStep[];

export const financeSteps = [
  ["events", ["Get the weekly snapshot", "Lấy số liệu chốt tuần"], ["Read balances and due dates.", "Đọc số dư và hạn thanh toán."]],
  ["cost", ["Review overdue balances", "Rà soát nợ quá hạn"], ["Find overdue balances and flag missing due dates.", "Xác định khoản quá hạn và đánh dấu khoản chưa có hạn thanh toán."]],
  ["finance-report", ["Build the report", "Lập báo cáo theo mẫu"], ["Save a PDF for finance to review.", "Lưu PDF để bộ phận tài chính kiểm tra."]],
] as const satisfies readonly CaseStep[];

export const pilotSteps = [
  ["pilot-select", ["Choose a representative case", "Chọn tình huống đại diện"], ["Identify the input and who receives the result.", "Xác định yêu cầu đầu vào và ai nhận kết quả."]],
  ["customize", ["Assign the agent its work", "Giao việc cho tác nhân"], ["Grant read or update permissions and choose approval steps.", "Cấp quyền đọc hoặc cập nhật và chọn bước cần duyệt."]],
  ["pilot-test", ["Test with sample data", "Chạy thử trên dữ liệu mẫu"], ["Compare the output with the current process.", "Đối chiếu đầu ra với cách làm hiện tại."]],
] as const satisfies readonly CaseStep[];
