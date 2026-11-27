import { EditorialIcon, type EditorialIconName } from "@/components/marketing/EditorialIcon";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { useProductCopy } from "./product-copy";

function DiagramWire({ className = "" }: { className?: string }) {
  return <span className={`product-diagram-wire ${className}`} aria-hidden="true" />;
}

function DiagramCard({
  variant, icon, title, description, children,
}: {
  variant: string;
  icon: EditorialIconName;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`product-diagram-card product-diagram-${variant}`}>
      <strong><EditorialIcon name={icon} />{title}</strong>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}

export function ProductDiagram() {
  const copy = useProductCopy();
  return (
    <figure className="product-hero-architecture" aria-labelledby="hero-architecture-title" aria-describedby="hero-architecture-flow">
      <figcaption>
        <strong id="hero-architecture-title">{copy(["Execution flow", "Luồng xử lý"])}</strong>
        <Link to="/products#architecture">{copy(["See how it integrates", "Xem cách tích hợp"])}</Link>
      </figcaption>
      <p id="hero-architecture-flow" hidden>
        {copy(["Requests pass through the API to the Worker. Customer configuration reaches the Worker through a separate path. The Worker runs an AI agent or a structured workflow. The executor checks permissions and requests approval where needed before acting on business systems. The execution ledger records what happened.", "Yêu cầu đi qua API đến Worker. Cấu hình khách hàng đi vào Worker theo một nhánh riêng. Worker chạy tác nhân AI hoặc quy trình định sẵn. Bộ thực thi kiểm tra quyền và yêu cầu phê duyệt khi cần trước khi thao tác trên hệ thống nghiệp vụ. Nhật ký ghi lại quá trình thực thi."])}
      </p>
      <div className="product-diagram">
        <DiagramCard variant="request" icon="channels" title={copy(["Work channels", "Kênh làm việc"])}
          description={copy(["Apps · Email · Schedules", "Ứng dụng · Email · Lịch"])}
        >
          <DiagramWire />
        </DiagramCard>
        <DiagramCard variant="configuration" icon="customize" title={copy(["Customer configuration", "Cấu hình khách hàng"])}
          description={copy(["Rules · Skills · Tools · Domain contracts", "Quy tắc · Kỹ năng · Công cụ · Hợp đồng nghiệp vụ"])}
        />
        <div className="product-diagram-core" role="group" aria-labelledby="hero-platform-label">
          <span className="product-diagram-core-label" id="hero-platform-label">Core Agentic</span>
          <div className="product-diagram-entry">
            <DiagramCard variant="api" icon="api" title="API" description={copy(["Accepts requests", "Tiếp nhận yêu cầu"])}>
              <DiagramWire />
            </DiagramCard>
            <DiagramWire className="product-diagram-config-wire" />
          </div>
          <DiagramCard variant="worker" icon="core" title="Worker">
            <ul role="list">
              <li><EditorialIcon name="agents" /><span>{copy(["AI agent", "Tác nhân AI"])}</span></li>
              <li><EditorialIcon name="workflows" /><span>{copy(["Structured workflow", "Quy trình định sẵn"])}</span></li>
            </ul>
            <DiagramWire />
          </DiagramCard>
          <div className="product-diagram-actions">
            <DiagramCard variant="executor" icon="policy" title={copy(["Executor", "Bộ thực thi"])}>
              <DiagramWire />
            </DiagramCard>
            <DiagramCard variant="policy" icon="approval" title={copy(["Permissions and approval", "Quyền và phê duyệt"])}>
              <DiagramWire className="product-diagram-policy-wire" />
            </DiagramCard>
            <DiagramCard variant="ledger" icon="activity" title={copy(["Execution ledger", "Nhật ký thực thi"])} />
          </div>
        </div>
        <DiagramCard variant="records" icon="databases" title={copy(["Systems of record", "Hệ thống nghiệp vụ"])}>
          <ul role="list">
            <li>ERP</li><li>CRM</li>
            <li>{copy(["Databases", "Cơ sở dữ liệu"])}</li>
            <li>{copy(["Files", "Tệp"])}</li>
          </ul>
        </DiagramCard>
      </div>
    </figure>
  );
}
