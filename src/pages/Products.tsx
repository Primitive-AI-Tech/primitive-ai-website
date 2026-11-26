import { Link } from "react-router-dom";
import { InvitationCTA } from "@/components/marketing/InvitationCTA";
import { V5PageHero } from "@/components/marketing/PageHero";
import { Eyebrow } from "@/components/marketing/primitives";
import { ChapterIcon } from "@/components/marketing/ChapterIcon";
import { ProductApplications } from "@/features/products/ProductApplications";
import { ProductDiagram } from "@/features/products/ProductDiagram";
import { useProductCopy, type ProductText } from "@/features/products/product-copy";
import type { ReactNode } from "react";

const configuration = [
  { icon: "customize", title: ["Task", "Nhiệm vụ"], description: ["Choose when the agent starts, the work it does, and the result it hands off.", "Chọn khi nào tác nhân bắt đầu, việc cần làm và kết quả cần bàn giao."] },
  { icon: "internal", title: ["Data and tools", "Dữ liệu và công cụ"], description: ["Set which data the agent can read and which tools it can use.", "Chỉ định dữ liệu tác nhân được đọc và công cụ được dùng."] },
  { icon: "approval", title: ["Permissions and approval", "Quyền và phê duyệt"], description: ["Define which actions the agent can take, what needs approval, and who can approve it.", "Chọn thao tác tác nhân được thực hiện, bước cần duyệt và người phê duyệt."] },
] satisfies { icon: string; title: ProductText; description: ProductText }[];

const workChannels = [
  [["Chat and applications", "Chat và ứng dụng"], ["Use web chat or embed it in your application.", "Chat trên web hoặc nhúng vào ứng dụng."]],
  [["Email and API", "Email và API"], ["Receive requests through configured connections.", "Tiếp nhận yêu cầu qua kết nối đã cấu hình."]],
  [["Schedules and events", "Lịch và sự kiện"], ["Start tasks on configured schedules or events.", "Khởi chạy tác vụ theo lịch hoặc sự kiện đã thiết lập."]],
] satisfies [ProductText, ProductText][];

const existingSystems = [
  [["Business applications", "Ứng dụng nghiệp vụ"], ["ERP, CRM, and WMS remain the sources of record.", "ERP, CRM và WMS vẫn giữ dữ liệu chính thức."]],
  [["Databases", "Cơ sở dữ liệu"], ["Access stays within assigned permissions.", "Truy cập trong phạm vi được cấp quyền."]],
  [["Files and knowledge repositories", "Tệp và kho tri thức"], ["Use approved documents and spreadsheets.", "Tài liệu và bảng tính đã được phê duyệt."]],
] satisfies [ProductText, ProductText][];

const independentProducts = [
  { title: "VisionHub", description: ["Computer vision for industrial operations.", "Thị giác máy tính cho hoạt động công nghiệp."], image: "visionhub-concept.jpg", alt: ["Concept image of a precision inspection camera on a manufacturing line.", "Camera kiểm tra trên dây chuyền công nghiệp."] },
  { title: "FamilyHub", description: ["Preserve and explore family knowledge.", "Lưu giữ và khám phá tri thức gia đình."], image: "familyhub-concept.jpg", alt: ["Concept image of a family album, photographs, and handwritten notes.", "Album gia đình bên cạnh ảnh và ghi chép viết tay."] },
  { title: "EduAssess AI", description: ["AI-assisted language assessment.", "Đánh giá năng lực ngôn ngữ với sự hỗ trợ của AI."], image: "eduassess-concept.jpg", alt: ["Concept image of an adult practicing spoken English with a laptop and worksheet.", "Người học luyện nói với máy tính và phiếu bài tập."] },
] satisfies { title: string; description: ProductText; image: string; alt: ProductText }[];

function ProductHeading({
  id, eyebrow, title, lead,
}: {
  id: string; eyebrow: string; title: ReactNode; lead: string;
}) {
  return (
    <div className="v5-page-heading">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id}>{title}</h2>
      <p className="lead">{lead}</p>
    </div>
  );
}

function Integration() {
  const copy = useProductCopy();

  function renderItems(items: [ProductText, ProductText][]) {
    return items.map(([label, description]) => (
      <div key={label[0]}><dt>{copy(label)}</dt><dd>{copy(description)}</dd></div>
    ));
  }

  return (
    <section className="v5-page-section v5-architecture v5-integration" id="architecture" aria-labelledby="platform-title">
      <span className="product-anchor" id="platform" aria-hidden="true" />
      <span className="product-anchor" id="integration" aria-hidden="true" />
      <div className="v5-page-wrap">
        <ProductHeading id="platform-title" eyebrow={copy(["Architecture", "Kiến trúc"])}
          title={copy(["Integrate with existing systems", "Tích hợp với hệ thống hiện có"])}
          lead={copy(["Requests come through configured channels. The Worker runs agents or workflows, and the executor governs actions in tools and business systems.", "Yêu cầu đi vào qua các kênh đã cấu hình. Worker chạy tác nhân hoặc quy trình, còn bộ thực thi kiểm soát thao tác với các công cụ và hệ thống nghiệp vụ."])}
        />
        <figure className="v5-flow" aria-label={copy(["Core Agentic integration architecture", "Kiến trúc tích hợp Core Agentic"])}>
          <div className="v5-flow-grid">
            <section className="v5-systems v5-inputs" aria-labelledby="product-channels-title">
              <h3 id="product-channels-title">{copy(["Work channels", "Kênh làm việc"])}</h3>
              <dl>{renderItems(workChannels)}</dl>
            </section>
            <section className="v5-core" aria-labelledby="product-core-title">
              <h3 id="product-core-title">Core Agentic</h3>
              <p>{copy(["The Worker executes tasks in the deployment environment dedicated to each customer.", "Worker thực hiện công việc trong môi trường triển khai riêng cho từng khách hàng."])}</p>
              <dl className="v5-engines">
                {renderItems([
                  [["AI agent", "Tác nhân AI"], ["Reasons and plans toward a goal.", "Suy luận và lập kế hoạch theo mục tiêu."]],
                  [["Workflow", "Quy trình"], ["Runs configured steps, tools, and rules.", "Chạy các bước, công cụ và quy tắc đã thiết lập."]],
                ])}
              </dl>
              <p className="v5-connectors">{copy(["The executor governs actions", "Bộ thực thi kiểm soát thao tác"])}</p>
            </section>
            <section className="v5-systems v5-records" aria-labelledby="product-records-title">
              <h3 id="product-records-title">{copy(["Existing systems", "Hệ thống hiện có"])}</h3>
              <dl>{renderItems(existingSystems)}</dl>
            </section>
            <div className="v5-model">
              <strong>{copy(["AI model", "Mô hình AI"])}</strong>
              <span>{copy(["Selected in the deployment configuration.", "Được chọn theo cấu hình triển khai."])}</span>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default function Products() {
  const copy = useProductCopy();

  return (
    <>
      <V5PageHero id="execution" className="product-hero"
        eyebrow={copy(["Flagship platform", "Nền tảng chủ lực"])}
        title={<>Core <em>Agentic</em></>}
        visual={<ProductDiagram />}
      >
        <span className="product-anchor" id="core-agentic-product" aria-hidden="true" />
        <span className="product-anchor" id="hero" aria-hidden="true" />
        <p className="product-hero-promise">{copy(["From a request to a result your team can review.", "Từ yêu cầu đến kết quả đội ngũ có thể kiểm tra."])}</p>
        <p className="v5-hero-description product-hero-lead">{copy(["Core Agentic connects approved data sources and the tools you already use. Your team configures how agents receive work, perform it, and request approval.", "Core Agentic kết nối với nguồn dữ liệu đã duyệt và công cụ hiện có. Đội ngũ cấu hình cách tác nhân nhận việc, thực hiện và xin phê duyệt."])}</p>
        <div className="product-actions">
          <Link className="product-action product-action-primary" to="/products#roles">{copy(["See how to configure it", "Xem cách cấu hình"])}</Link>
          <Link className="product-action" to="/products#applications">{copy(["Explore applications", "Khám phá ứng dụng"])}</Link>
        </div>
      </V5PageHero>

      <ProductApplications />

      <section className="v5-page-section product-configuration ink" id="roles" aria-labelledby="roles-title">
        <div className="v5-page-wrap">
          <ProductHeading id="roles-title"
            eyebrow={copy(["Flexible configuration", "Cấu hình linh hoạt"])}
            title={<>{copy(["Configure agents", "Cấu hình tác nhân"])} <em>{copy(["for the work", "theo công việc"])}</em></>}
            lead={copy(["Your team configures agents for each workflow and decides how far AI can act.", "Đội ngũ cấu hình tác nhân cho từng quy trình và quyết định AI được phép làm đến đâu."])}
          />
          <ul className="configuration-decisions" role="list">
            {configuration.map(({ icon, title, description }) => (
              <li key={icon}>
                <ChapterIcon name={icon} />
                <div><h3>{copy(title)}</h3><p>{copy(description)}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Integration />

      <section className="v5-page-section product-specialists" id="specialist-products" aria-labelledby="specialist-title">
        <div className="v5-page-wrap">
          <ProductHeading id="specialist-title"
            eyebrow={copy(["Product portfolio", "Danh mục sản phẩm"])}
            title={copy(["Specialist products", "Sản phẩm chuyên biệt"])}
            lead={copy(["Primitive AI’s independent products serve specific needs in manufacturing, families, and education.", "Các sản phẩm độc lập của Primitive AI phục vụ những nhu cầu cụ thể trong sản xuất, gia đình và giáo dục."])}
          />
          <ul className="product-specialist-grid" role="list">
            {independentProducts.map(({ title, description, image, alt }) => (
              <li key={title}>
                <img src={`/images/products/${image}`} width={1536} height={1024} loading="lazy" decoding="async" alt={copy(alt)} />
                <div><h3>{title}</h3><p>{copy(description)}</p></div>
              </li>
            ))}
          </ul>
          <div className="chapter-followup product-services-link">
            <p>{copy(["Primitive AI offers custom AI development when you need deeper integration or a tailored solution.", "Với nhu cầu cần tích hợp sâu hoặc xây dựng giải pháp riêng, Primitive AI cung cấp dịch vụ phát triển AI theo yêu cầu."])}</p>
            <Link className="v5-text-link" to="/services#capabilities">{copy(["Explore custom AI services", "Xem dịch vụ phát triển AI"])}</Link>
          </div>
        </div>
      </section>

      <InvitationCTA id="next-step" />
    </>
  );
}
